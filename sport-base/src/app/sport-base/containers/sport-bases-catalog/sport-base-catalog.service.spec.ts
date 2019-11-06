import { TestBed } from '@angular/core/testing';

import { SportBaseCatalogService } from './sport-base-catalog.service';

describe('SportBaseCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportBaseCatalogService = TestBed.get(SportBaseCatalogService);
    expect(service).toBeTruthy();
  });
});
