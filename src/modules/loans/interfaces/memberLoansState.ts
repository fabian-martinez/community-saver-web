import Loan from "./loanInterface";

interface MemberLoansState {
    total_pages: number,
    last_page: number,
    loans: Loan[]; // Define la estructura de datos para los préstamos
  }

export default MemberLoansState