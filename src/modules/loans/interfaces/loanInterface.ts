interface Loan{
    id: string;
    member_id: string;
    original_amount: number;
    updated_amount: number;
    monthly_payment: number;
    next_interest_payment: number;
    next_total_payment:number;
    interest_rate: number;
    created_at: number;
    updated_at: number;
    loan_type: string;
    state: string;
} 

export default Loan;