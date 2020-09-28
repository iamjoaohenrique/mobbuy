import { TestBed } from '@angular/core/testing';

import { RemunerationService } from './remuneration.service';

describe('RemunerationServiceService', () => {
  let service: RemunerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemunerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
