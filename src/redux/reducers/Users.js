import {
	FETCH_USER_SUCCESS,
	FETCH_USERS_SUCCESS,
	SHOW_ERROR_MESSAGE,
	HIDE_ERROR_MESSAGE,
	SHOW_LOADING
} from '../constants/Users';

const initState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  users: null,
  user: null
}

const users = (state = initState, action) => {
	switch (action.type) {
		case SHOW_ERROR_MESSAGE: 
			return {
				...state,
				message: action.message,
				showMessage: true,
				loading: false
			}
		case HIDE_ERROR_MESSAGE: 
			return {
				...state,
				message: '',
				showMessage: false,
			}
		case FETCH_USERS_SUCCESS: {
			return {
				...state,
				loading: false,
				users: action.users
			}
		}
		case FETCH_USER_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.user
			}
		}
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		default:
			return state;
	}
}

export default users
