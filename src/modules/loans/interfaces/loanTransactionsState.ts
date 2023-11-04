import LoanTransaction from "./loanTransactionInterface";

interface LoanTransactionsState {
    total_pages: number,
    last_page: number,
    transactions: LoanTransaction[]; 
}

export default LoanTransactionsState;