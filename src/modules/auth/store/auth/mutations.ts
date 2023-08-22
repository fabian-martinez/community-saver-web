import { State } from "./types"

export const loginUser = (state:State, { user, idToken, refreshToken }:State) => {
  if ( idToken ) {
    localStorage.setItem('idToken', idToken),
    state.idToken = idToken
  }
  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
    state.refreshToken = refreshToken 
  }
  delete user?.password
  state.user = user
  state.status = 'authenticated'

}
export const logout = (state:State) => {
  state.user = null
  state.idToken = null
  state.refreshToken = null
  state.status = 'no-authenticated'

  localStorage.removeItem('idToken')
  localStorage.removeItem('refreshToken')
}