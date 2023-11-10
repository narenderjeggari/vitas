import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCalculatorFormService } from './loan-calculator-form.service';
import { LoanCalculatorComponent } from './loan-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LoanCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [LoanCalculatorFormService],
  exports: [LoanCalculatorComponent],
})
export class LoanCalculatorModule {}
