interface LoanTransaction{
    id: number,
    loan_id: string,
    date: number,
    amount: number,
    type: string
    last_balance: number,
}

export default LoanTransaction;