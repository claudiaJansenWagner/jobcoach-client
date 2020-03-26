import { TestBed } from '@angular/core/testing';

import { DeelnemerService } from './deelnemer.service';

describe('DeelnemerService', () => {
  let service: DeelnemerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeelnemerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
