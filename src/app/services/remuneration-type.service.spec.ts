import { TestBed } from '@angular/core/testing';

import { RemunerationTypeService } from './remuneration-type.service';

describe('RemunerationTypeService', () => {
  let service: RemunerationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemunerationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
