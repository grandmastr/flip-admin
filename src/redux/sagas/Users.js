import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	FETCH_USER,
	FETCH_USERS
} from '../constants/Users';
import {
  showErrorMessage,
  hideErrorMessage,
  fetchUserSuccess,
  fetchUsersSuccess
} from "../actions/Users";

import UserService from "services/UserService";


export function* fetchUser() {
	yield takeEvery(FETCH_USER, function* ({ payload }) {
		const { userId } = payload;

		try {
			const data = yield call(UserService.getUserDetails, { userId });
			console.log("Data from fetchUser saga:", data);
			yield put(fetchUserSuccess(data.data));
		}
		catch (error) {
			yield put(showErrorMessage(error.response.data.message));
		}
	});
}

export function* fetchUsers() {
	yield takeEvery(FETCH_USERS, function* ({ payload }) {
		const { skip, limit } = payload;

		try {
			const data = yield call(UserService.getAllUsers, { skip, limit });
			console.log("Data from fetchUsers saga:", data);
			yield put(fetchUsersSuccess(data.data));
		}
		catch (error) {
			yield put(showErrorMessage(error.response ? error.response.data.message : error));
		}
	});
}


export default function* rootSaga() {
  yield all([
		fork(fetchUser),
		fork(fetchUsers)
  ]);
}
