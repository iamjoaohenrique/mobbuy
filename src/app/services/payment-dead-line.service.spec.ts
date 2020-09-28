import { TestBed } from '@angular/core/testing';

import { PaymentDeadLineService } from './payment-dead-line.service';

describe('PaymentDeadLineService', () => {
  let service: PaymentDeadLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDeadLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
