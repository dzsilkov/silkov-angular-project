import { TestBed } from '@angular/core/testing';

import { SportBaseService } from './sport-base.service';

describe('SportBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportBaseService = TestBed.get(SportBaseService);
    expect(service).toBeTruthy();
  });
});
