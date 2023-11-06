import Loan from "./loanInterface";

interface LoansManager {
    loading:boolean,
    member_id: string,
    total_pages: number,
    last_page: number,
    loans: Loan[]; // Define la estructura de datos para los préstamos
  }

export default LoansManager