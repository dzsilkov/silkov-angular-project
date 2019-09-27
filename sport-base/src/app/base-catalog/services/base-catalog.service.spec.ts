import { TestBed } from '@angular/core/testing';

import { BaseCatalogService } from './base-catalog.service';

describe('BaseCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseCatalogService = TestBed.get(BaseCatalogService);
    expect(service).toBeTruthy();
  });
});
