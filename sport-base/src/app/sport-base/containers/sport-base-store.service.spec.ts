import { TestBed } from '@angular/core/testing';

import { SportBaseStoreService } from './sport-base-store.service';

describe('SportBaseStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportBaseStoreService = TestBed.get(SportBaseStoreService);
    expect(service).toBeTruthy();
  });
});
