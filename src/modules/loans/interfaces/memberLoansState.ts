import Loan from "./loanInterface";
import Member from "./memberInterface";

interface LoansManager {
    loading:boolean,
    member: Member,
    total_pages: number,
    last_page: number,
    loans: Loan[]; // Define la estructura de datos para los préstamos
  }

export default LoansManager