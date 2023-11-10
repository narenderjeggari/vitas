import { TestBed } from '@angular/core/testing';

import { LoanCalculatorFormService } from './loan-calculator-form.service';

describe('LoanCalculatorFormService', () => {
  let service: LoanCalculatorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanCalculatorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
