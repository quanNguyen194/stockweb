export const API_URL = 'https://stockweb.com'

export const login = {
  method: 'POST',
  url: `${API_URL}/api/login`
}

export const verifyToken = {
  method: 'GET',
  url: `${API_URL}/api/token/verify`
}

export const changePassword = {
  method: 'PUT',
  url: `${API_URL}/api/me/change-password`
}

export const resetPassword = {
  method: 'POST',
  url: `${API_URL}/api/reset-pwd`
}

export const forgotPassword = {
  method: 'POST',
  url: `${API_URL}/api/forgot-pwd`
}
