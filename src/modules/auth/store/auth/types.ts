export interface User {
    name:string,
    email:string,
    password?:string|null
}

export interface State {
    status:string,
    user?:User|null,
    idToken?:string|null,
    refreshToken?:string|null,
}

export interface RootState {
    version: string;
}