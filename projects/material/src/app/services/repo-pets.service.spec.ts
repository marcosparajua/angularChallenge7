import { TestBed } from '@angular/core/testing';

import { RepoPetsService } from './repo-pets.service';

describe('RepoPetsService', () => {
  let service: RepoPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
