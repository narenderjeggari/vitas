import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCalculatorFormService } from './loan-calculator-form.service';
import { LoanCalculatorComponent } from './loan-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [LoanCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [LoanCalculatorFormService],
  exports: [LoanCalculatorComponent],
})
export class LoanCalculatorModule {}
