import { TestBed } from '@angular/core/testing';

import { FacadeSportBaseService } from './facade-sport-base.service';

describe('FacadeSportBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacadeSportBaseService = TestBed.get(FacadeSportBaseService);
    expect(service).toBeTruthy();
  });
});
