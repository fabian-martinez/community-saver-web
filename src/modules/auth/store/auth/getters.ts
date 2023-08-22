import { State } from "./types"

export const currentState = ( state:State ) => {
    return state.status
}
export const username = ( state:State ) => {
    return state.user?.name || ''
}