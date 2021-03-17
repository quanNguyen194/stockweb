import {
  LOGIN,
  LOGOUT,
  SET_LOADING,
  IS_ADMIN_PAGE,
  VERIFY_TOKEN,
  LOGIN_PREVIEW
} from './types'

export default {
  [LOGIN]: (state, res) => {
    state.user = res.user
    state.token = res.token
    localStorage.setItem('token', res.token)
  },
  [LOGIN_PREVIEW]: (state, res) => {
    state.user = res.user
    state.token = res.token
    localStorage.setItem('preview_token', res.token)
  },
  [LOGOUT]: (state) => {
    state.token = ''
    localStorage.removeItem('token')
  },
  [SET_LOADING]: (state, isLoading) => {
    state.flags.isLoading = isLoading
  },
  [IS_ADMIN_PAGE]: (state) => {
    state.flags.isAdminPage = true
  },
  [VERIFY_TOKEN]: (state, data) => {
    state.user = data.user
    state.store = data.store
    state.company = data.company || {}
  }
}
