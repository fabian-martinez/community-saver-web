import Session from "@/modules/auth/interfaces/SessionInterface";

const state: Session = {
    user:{name:'',email:''},
    refreshToken:'',
    status:'authenticating',
};

export default state;