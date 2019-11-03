import {Component, OnInit} from '@angular/core';
import {DataBaseService} from "../../../services/data-base.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SportBase} from "../../../models/sport-base";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-add-sport-base',
  templateUrl: './add-sport-base.component.html',
  styleUrls: ['./add-sport-base.component.css']
})

export class AddSportBaseComponent implements OnInit {
  formAddSportBase = new FormGroup({
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

  isLoggedIn: boolean;
  addBaseForm: FormGroup;

  constructor(private baseService: DataBaseService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private authService: AuthService,
  ) {
    this.addBaseForm = formBuilder.group({
      "name": ['', [Validators.required]],
      "email": ['', [Validators.required]],
      "phone": ['', [Validators.required]],
      "description": ['', [Validators.required]],
      "file": ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.authService.getAuth().pipe().subscribe(auth => {
      if (!auth) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  get baseSportsControls() {
    return (this.formAddSportBase.get('sports') as FormArray).controls;
  }

  get baseImagesControls() {
    return (this.formAddSportBase.get('images') as FormArray).controls;
  }

  onAddSport() {
    (<FormArray>this.formAddSportBase.get('sports')).push(
      new FormControl(null, Validators.required)
    );
  }

  onAddImage() {
    (<FormArray>this.formAddSportBase.get('images')).push(
      new FormControl(null, Validators.required)
    );
  }

  onDeleteSport(index: number) {
    (<FormArray>this.formAddSportBase.get('sports')).removeAt(index);
  }

  onDeleteImage(index: number) {
    (<FormArray>this.formAddSportBase.get('images')).removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.formAddSportBase.value);
    const newBase: SportBase = this.formAddSportBase.value;
    this.baseService.newSportBase(newBase);
    this.formAddSportBase.reset();
  }
}
