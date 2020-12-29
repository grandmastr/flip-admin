import fetch from 'auth/FetchInterceptor'

export default {
  getAllUsers(params) {
    return fetch({
      url: '/admin/user-account',
      method: 'GET',
      params
    })
  },

  getUserDetails({ userId }) {
    return fetch({
      url: `/admin/user-account/${userId}`,
      method: 'GET'
    })
  }
}