import LoanTransactionsState from "../../interfaces/loanTransactionsState";

  
  const state: LoanTransactionsState = {
    loading:false,
    loan_id:"",
    transactions: [],
    last_page: 0,
    total_pages: 0
  };

  export default state;