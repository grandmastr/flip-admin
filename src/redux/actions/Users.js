import {
  FETCH_USER,
	FETCH_USERS,
  FETCH_USER_SUCCESS,
	FETCH_USERS_SUCCESS,
	SHOW_ERROR_MESSAGE,
	HIDE_ERROR_MESSAGE,
	SHOW_LOADING
} from '../constants/Users';

export const fetchUsers = ({ skip, limit } = {}) => {
  return {
    type: FETCH_USERS,
    payload: { skip, limit }
  }
};

export const fetchUser = (userId) => {
  return {
    type: FETCH_USER,
    payload: userId
  }
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
};

export const showErrorMessage = (message) => {
  return {
    type: SHOW_ERROR_MESSAGE,
    message
  };
};

export const hideErrorMessage = () => {
  return {
    type: HIDE_ERROR_MESSAGE,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
