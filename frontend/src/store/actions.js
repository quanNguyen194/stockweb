import Auth from '@/services/auth'
import {
  LOGIN,
  LOGOUT,
  SET_LOADING,
  IS_ADMIN_PAGE,
  SET_CURRENT_STORE,
  VERIFY_TOKEN,
  SET_CURRENT_COMPANY,
  UPDATE_STORE_UNITS,
  LOGIN_PREVIEW
} from './types'

export default {
  [LOGIN]: async ({ commit, dispatch, state }, data) => {
    // loading
    commit(SET_LOADING, true)
    try {
      const res = await Auth.login(data)
      if (res.status) {
        if (data.admin_id) {
          commit(LOGIN_PREVIEW, res.data)
        }
        commit(LOGIN, res.data)
        commit(SET_LOADING, false)
        return res.data
      } else {
        throw new Error('Invalid email or password!')
      }
    } catch (e) {
      console.warn(e)
      commit(SET_LOADING, false)
      return null
    }
  },
  [LOGOUT]: ({ commit, dispatch, state }) => {
    commit(LOGOUT)
  },
  [SET_LOADING]: ({ commit, dispatch, state }, isLoading) => {
    commit(SET_LOADING, isLoading)
  },
  [IS_ADMIN_PAGE]: ({ commit, dispatch, state }) => {
    commit(IS_ADMIN_PAGE)
  },
  [UPDATE_STORE_UNITS]: ({ commit, dispatch, state }, units) => {
    commit(UPDATE_STORE_UNITS, units)
  },
  [SET_CURRENT_STORE]: async ({ commit, dispatch, state }, { storeId, companyId }) => {
    commit(SET_LOADING, true)

    const res = await Auth.checkStore(storeId, companyId)
    commit(SET_LOADING, false)

    if (res.data.store) {
      commit(SET_CURRENT_STORE, res.data.store)
      commit(SET_CURRENT_COMPANY, res.data.company)
      return res
    } else {
      throw new Error('Invalid store id')
    }
  },
  [VERIFY_TOKEN]: async ({ commit, dispatch, state }) => {
    console.log('Verify token')
    commit(SET_LOADING, true)

    const token = localStorage.getItem('preview_token') || localStorage.getItem('token')

    if (!token) {
      commit(SET_LOADING, false)
      return new Promise(resolve => {
        setTimeout(() => resolve(false))
      })
    }

    const res = await Auth.verifyToken(token)
    commit(SET_LOADING, false)

    if (!res) {
      return null
    }

    if (res.data.user) {
      commit(VERIFY_TOKEN, res.data)
      return res.data
    } else {
      return null
    }
  }
}
