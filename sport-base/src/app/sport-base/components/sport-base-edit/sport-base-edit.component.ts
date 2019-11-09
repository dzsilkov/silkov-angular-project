import {Component, OnInit} from '@angular/core';
import {DataBaseService} from "../../../services/data-base.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {SportBase} from "../../models/sport-base";

@Component({
  selector: 'app-sport-base-edit',
  templateUrl: './sport-base-edit.component.html',
  styleUrls: ['./sport-base-edit.component.css']
})
export class SportBaseEditComponent implements OnInit {
  formEditSportBase = new FormGroup({
    name: new FormControl('', Validators.required),
    logo: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    accommodation: new FormControl('', Validators.required),
    meals: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    infrastructureBasic: new FormControl('', Validators.required),
    infrastructureAdditional: new FormControl('', Validators.required),
    infrastructureOther: new FormControl('', Validators.required),
    sports: new FormArray([]),
    images: new FormArray([])
  });

  baseId: string;

  constructor(
    private baseService: DataBaseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => {
          this.baseId = params.get('id');
          return this.baseService.getSportBase(this.baseId);
        }),
      ).subscribe((base) => {
      this.formEditSportBase.patchValue(base);
      if (base['sports']) {
        for (let sport of base['sports']) {
          (<FormArray>this.formEditSportBase.get('sports')).push(
            new FormControl(sport, Validators.required)
          )
        }
      }
      if (base['images']) {
        for (let image of base['images']) {
          (<FormArray>this.formEditSportBase.get('images')).push(
            new FormControl(image, Validators.required)
          )
        }
      }
    })
  }

  get baseSportsControls() {
    return (this.formEditSportBase.get('sports') as FormArray).controls;
  }

  get baseImagesControls() {
    return (this.formEditSportBase.get('images') as FormArray).controls;
  }


  onAddSport() {
    (<FormArray>this.formEditSportBase.get('sports')).push(
      new FormControl(null, Validators.required)
    );
  }

  onAddImage() {
    (<FormArray>this.formEditSportBase.get('images')).push(
      new FormControl(null, Validators.required)
    );
  }

  onDeleteSport(index: number) {
    (<FormArray>this.formEditSportBase.get('sports')).removeAt(index);
  }

  onDeleteImage(index: number) {
    (<FormArray>this.formEditSportBase.get('images')).removeAt(index);
  }

  onSubmit() {
    const updateBase: SportBase = this.formEditSportBase.value;
    this.baseService.updateSportBase(updateBase, this.baseId);
    this.formEditSportBase.reset();
    this.router.navigate([`/sport-bases/${this.baseId}`]);
  }
}
