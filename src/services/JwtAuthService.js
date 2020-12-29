import fetch from 'auth/FetchInterceptor'


export default {
	login(data) {
		return fetch({
			url: '/admin/log-in',
			method: 'POST',
			headers: {
				'public-request': true
			},
			data: data
		})
	},

	signUp(data) {
		return fetch({
			url: '/admin/user-account',
			method: 'post',
			headers: {
				'public-request': 'true'
			},
			data: data
		})
	}
}