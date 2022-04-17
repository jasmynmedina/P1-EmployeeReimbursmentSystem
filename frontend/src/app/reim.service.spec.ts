import { TestBed } from '@angular/core/testing';

import { ReimService } from './reim.service';

describe('ReimService', () => {
  let service: ReimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
