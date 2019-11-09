import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSportBaseComponent } from './search-sport-base.component';

describe('SearchSportBaseComponent', () => {
  let component: SearchSportBaseComponent;
  let fixture: ComponentFixture<SearchSportBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSportBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSportBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
