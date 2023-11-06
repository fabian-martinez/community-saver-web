import LoansManager from "../../interfaces/memberLoansState";

const state: LoansManager = {
    loading:true,
    member:{name:"",id:""},
    loans: [],
    total_pages:0,
    last_page:0
};

export default state;
