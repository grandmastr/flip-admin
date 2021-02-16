import {
  SIGNIN,
  AUTHENTICATED,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNIN_WITH_FACEBOOK,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED,
} from '../constants/Auth'
import { AUTH_TOKEN } from 'redux/constants/Auth'
import axios from '../../lib/axios'
import { altAdminData } from '../actions/Admin'

export const signIn = (user) => async (dispatch) => {
  return await axios
    .post('/admin/log-in', { ...user })
    .then(({ status, data: response }) => {
      console.log(response, 'SDjksdjdkj')
      // console.log({ code, response, message }, 'sdjsksjdkj')
      if (status === 200) {
        // axios.head
        localStorage.setItem(AUTH_TOKEN, response.data.token)
        // axios.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${response.token}`
        dispatch({
          type: SIGNIN,
          payload: response.data.token,
        })
        dispatch(altAdminData(response.data.user))
      } else {
        dispatch({
          type: SHOW_AUTH_MESSAGE,
          message: response.message,
        })
      }
    })
    .catch(() => {})
}

// export const authenticated = ({ token, user }) => {
//   return {
//     type: AUTHENTICATED,
//     token,
//     user
//   }
// };

export const signOut = () => {
  return {
    type: SIGNOUT,
  }
}

// export const signOutSuccess = () => {
//   return {
//     type: SIGNOUT_SUCCESS,
//   }
// };

export const signUp = (user) => async (dispatch) => {
  console.log(user, 'Sdjskdj')
  return await axios
    .post('/admin/user-account', { ...user })
    .then((response) => {
      console.log(response, 'sdjksdkjsdjk')
    })
  // return {
  //   type: SIGNUP,
  //   payload: user,
  // }
}

// export const signUpSuccess = ({ token, user }) => {
//   return {
//     type: SIGNUP_SUCCESS,
//     token,
//     user
//   };
// };

export const showAuthMessage = (message) => {
  return {
    type: SHOW_AUTH_MESSAGE,
    message,
  }
}

export const hideAuthMessage = () => {
  return {
    type: HIDE_AUTH_MESSAGE,
  }
}

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  }
}
