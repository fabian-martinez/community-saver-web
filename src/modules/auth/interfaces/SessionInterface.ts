import User from "./UserInterface"

interface Session{
    user:{
        name?:string,
        email?:string
    },
    token?:string
    refreshToken?:string,
    status?:string
}

export default Session