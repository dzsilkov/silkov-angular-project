import { TestBed } from '@angular/core/testing';

import { ArticleCatalogService } from './article-catalog.service';

describe('ArticleCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleCatalogService = TestBed.get(ArticleCatalogService);
    expect(service).toBeTruthy();
  });
});
