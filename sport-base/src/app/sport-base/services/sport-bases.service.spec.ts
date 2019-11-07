import { TestBed } from '@angular/core/testing';

import { SportBasesService } from './sport-bases.service';

describe('SportBasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportBasesService = TestBed.get(SportBasesService);
    expect(service).toBeTruthy();
  });
});
