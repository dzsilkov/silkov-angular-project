import { TestBed } from '@angular/core/testing';

import { SearchSportBaseService } from './search-sport-base.service';

describe('SearchSportBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSportBaseService = TestBed.get(SearchSportBaseService);
    expect(service).toBeTruthy();
  });
});
