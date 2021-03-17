import { Api } from './api'
import { login, verifyToken, resetPassword, forgotPassword } from '@/constants/api'

export default {
  login (data) {
    return Api.request({
      url: login.url,
      method: login.method,
      data
    }).catch((error) => {
      throw new Error(error)
    })
  },
  async verifyToken () {
    try {
      return await Api.requestWithToken({
        url: verifyToken.url,
        method: verifyToken.method
      })
    } catch (e) {
      console.log('Invalid token')
      return null
    }
  },

  async resetPass (data) {
    try {
      const dataPass = await Api.request({
        url: `${resetPassword.url}`,
        method: resetPassword.method,
        data: data
      })
      if (dataPass.status) {
        return dataPass.data
      }
      return []
    } catch (e) {
      return e.response.data
    }
  },

  async forgotPassword (data) {
    try {
      const dataPass = await Api.request({
        url: forgotPassword.url,
        method: forgotPassword.method,
        data: data
      })
      return dataPass
    } catch (e) {
      return e.response.data
    }
  }
}
