import {
  AUTH_TOKEN,
  AUTHENTICATED,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SIGNIN,
} from '../constants/Auth'

const initState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  token: localStorage.getItem(AUTH_TOKEN),
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case SIGNIN:
      console.log(action, 'Sdjksdjsdkj')
      return {
        ...state,
        loading: false,
        token: action.payload,
        redirect: '/',
      }
    case AUTHENTICATED:
      return {
        ...state,
        loading: false,
        redirect: '/',
        token: action.token,
        user: action.user,
      }
    case SHOW_AUTH_MESSAGE:
      return {
        ...state,
        message: action.message,
        showMessage: true,
        loading: false,
      }
    case HIDE_AUTH_MESSAGE:
      return {
        ...state,
        message: '',
        showMessage: false,
      }
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        token: null,
        redirect: '/',
        loading: false,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        redirect: '/',
        token: action.token,
        user: action.user,
      }
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default auth
