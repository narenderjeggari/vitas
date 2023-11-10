export interface LoanCalculatorModel {
    loanType: string;
    loanAmount: number;
    loanTerm: number;
}

export interface LoanCalculatorLoanTypeModel {
    type: string;
    label: string;
}


export const LOAN_TYPES: LoanCalculatorLoanTypeModel[] = [{
    type: 'medical',
    label: 'Medical Loans'
},{
    type: 'business',
    label: 'Business Loans'
},{
    type: 'homeImprovements',
    label: 'Home Improvement Loans'
},{
    type: 'education',
    label: 'Education Loans'
},{
    type: 'agricultural',
    label: 'Agriculture Loans'
},{
    type: 'commercial',
    label: 'Commercial Invoice Financing Loans'
},{
    type: 'factoring',
    label: 'Solutions Loan Product'
},{
    type: 'fixedAsset',
    label: 'Fixed Asset Loans'
},{
    type: 'workingCapital',
    label: 'Working Capital Loans'
}];