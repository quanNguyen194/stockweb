import axios from 'axios'

export class Api extends axios {
  static request (params) {
    return axios(params).then(data => data.data)
  }

  static requestWithToken (params) {
    let token = localStorage.getItem('token')
    if (params.header) {
      params.headers['Authorization'] = 'Bearer ' + token
    } else {
      params.headers = { 'Authorization': 'Bearer ' + token }
    }
    params.headers['Content-Type'] = 'application/json'
    return axios(params).then(data => data.data)
  }
}
