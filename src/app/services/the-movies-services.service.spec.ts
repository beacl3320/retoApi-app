import { TestBed } from '@angular/core/testing';

import { TheMoviesServicesService } from './the-movies-services.service';

describe('TheMoviesServicesService', () => {
  let service: TheMoviesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMoviesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
