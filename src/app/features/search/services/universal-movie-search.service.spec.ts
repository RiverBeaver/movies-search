import { TestBed } from '@angular/core/testing';

import { UniversalMovieSearchService } from './universal-movie-search.service';

describe('UniversalMovieSearchService', () => {
  let service: UniversalMovieSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversalMovieSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
