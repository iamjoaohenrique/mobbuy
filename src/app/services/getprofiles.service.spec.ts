import { TestBed } from '@angular/core/testing';

import { GetprofilesService } from './getprofiles.service';

describe('GetprofilesService', () => {
  let service: GetprofilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetprofilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
