import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanCalculatorModel } from './loan-calculator.model';

@Injectable()
export class LoanCalculatorFormService {

  constructor(private fb: FormBuilder) { }

  buildLoanCalculatorForm() {
    return this.fb.group({
      loanType: [],
      loanAmount:[0, [Validators.required, Validators.min(1)]],
      loanTerm:[0,[Validators.required, Validators.min(1)]]
    })
  }

  getFormControls(form: FormGroup) {
    return form.controls as { [key in keyof LoanCalculatorModel]: FormControl };
  }
}
