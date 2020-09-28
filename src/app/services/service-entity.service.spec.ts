import { TestBed } from '@angular/core/testing';

import { ServiceEntityService } from './service-entity.service';

describe('ServiceEntityService', () => {
  let service: ServiceEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
