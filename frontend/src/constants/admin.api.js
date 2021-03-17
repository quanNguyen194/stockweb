import { API_URL } from './api'

export const getCompany = {
  method: 'GET',
  url: `${API_URL}/admin/api/companies`
}

export const addCompany = {
  method: 'POST',
  url: `${API_URL}/admin/api/companies`
}

export const updateCompany = {
  method: 'PUT',
  url: `${API_URL}/admin/api/companies`
}
export const deleteCompany = {
  method: 'DELETE',
  url: `${API_URL}/admin/api/companies`
}

// get detail a Company
export const getDetailACompany = {
  method: 'GET',
  url: `${API_URL}/admin/api/companies`
}
