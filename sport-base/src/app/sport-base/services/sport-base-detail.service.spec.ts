import { TestBed } from '@angular/core/testing';

import { SportBaseDetailService } from './sport-base-detail.service';

describe('SportBaseDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportBaseDetailService = TestBed.get(SportBaseDetailService);
    expect(service).toBeTruthy();
  });
});
