import LoanTransaction from "./loanTransactionInterface";

interface LoanTransactionsState {
    loading:boolean,
    loan_id:string,
    total_pages: number,
    last_page: number,
    transactions: LoanTransaction[]; 
}

export default LoanTransactionsState;