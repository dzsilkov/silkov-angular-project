import { TestBed } from '@angular/core/testing';

import { SportBaseService } from './sport-base.service';

describe('SportBasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportBaseService = TestBed.get(SportBaseService);
    expect(service).toBeTruthy();
  });
});
