import { TestBed } from '@angular/core/testing';

import { CreditCardFlagService } from './credit-card-flag.service';

describe('CreditCardFlagService', () => {
  let service: CreditCardFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
