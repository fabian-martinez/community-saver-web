interface LoanTransaction{
    id: number,
    loan_id: string,
    date: number,
    payment_amount: number,
    interest_amount: number,
    disbursement_amount: number,
    last_balance: number,
}

export default LoanTransaction;