import { TestBed } from '@angular/core/testing';

import { GenresAndCountriesService } from './genres-and-countries.service';

describe('GenresAndCountriesService', () => {
  let service: GenresAndCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenresAndCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
