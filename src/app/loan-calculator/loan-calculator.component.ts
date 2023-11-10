import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanCalculatorFormService } from './loan-calculator-form.service';
import { LOAN_TYPES, LoanCalculatorLoanTypeModel, LoanCalculatorModel } from './loan-calculator.model';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoanCalculatorComponent implements OnInit {
  loanCalculatorForm!: FormGroup;
  formControls!: {
    [key in keyof LoanCalculatorModel]: FormControl;
  };
  loanTypes:LoanCalculatorLoanTypeModel[] = LOAN_TYPES;

  constructor(private formService: LoanCalculatorFormService) {}

  ngOnInit(): void {
    this.loanCalculatorForm = this.formService.buildLoanCalculatorForm();
    this.formControls = this.formService.getFormControls(this.loanCalculatorForm);
  }

  onCalculate(): void {
    
  }
}
