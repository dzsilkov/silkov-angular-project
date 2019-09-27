import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCatalogComponent } from './articles-catalog.component';

describe('ArticlesCatalogComponent', () => {
  let component: ArticlesCatalogComponent;
  let fixture: ComponentFixture<ArticlesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
