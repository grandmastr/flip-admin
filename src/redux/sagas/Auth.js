import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	AUTH_TOKEN,
	SIGNIN,
	SIGNOUT,
	SIGNUP,
} from '../constants/Auth';
import {
	showAuthMessage,
	authenticated,
	signOutSuccess,
	signUpSuccess,
} from "../actions/Auth";

import FirebaseService from 'services/FirebaseService'
import AuthService from "services/JwtAuthService";

// export function* signInWithFBEmail() {
//   yield takeEvery(SIGNIN, function* ({payload}) {
// 		const {email, password} = payload;
// 		try {
// 			const user = yield call(FirebaseService.signInEmailRequest, email, password);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(authenticated(user.user.uid));
// 			}
// 		} catch (err) {
// 			yield put(showAuthMessage(err));
// 		}
// 	});
// }


export function* logIn() {
	yield takeEvery(SIGNIN, function* ({ payload }) {
		const { email, password } = payload;

		try {
			const data = yield call(AuthService.login, { email, password });
			console.log("Data from logIn saga:", data);
			localStorage.setItem(AUTH_TOKEN, data.data.token);
			yield put(authenticated(data.data));
		}
		catch (error) {
			yield put(showAuthMessage(error.response.data.message));
		}
	});
}

export function* signUp() {
	yield takeEvery(SIGNUP, function* ({ payload }) {
		const { email, firstName, lastName, password } = payload;

		try {
			const data = yield call(AuthService.signUp, { email, firstName, lastName, password });
			console.log("Data from signUp saga:", data);
			localStorage.setItem(AUTH_TOKEN, data.data.token);
			yield put(signUpSuccess(data.data));
		}
		catch (error) {
			yield put(showAuthMessage(error.response ? error.response.data.message : error));
		}
	});
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
		try {
			const signOutUser = yield call(FirebaseService.signOutRequest);
			if (signOutUser === undefined) {
				localStorage.removeItem(AUTH_TOKEN);
				yield put(signOutSuccess(signOutUser));
			} else {
				yield put(showAuthMessage(signOutUser.message));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

// export function* signUpWithFBEmail() {
//   yield takeEvery(SIGNUP, function* ({payload}) {
// 		const {email, password} = payload;
// 		try {
// 			const user = yield call(FirebaseService.signUpEmailRequest, email, password);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(signUpSuccess(user.user.uid));
// 			}
// 		} catch (error) {
// 			yield put(showAuthMessage(error));
// 		}
// 	}
// 	);
// }

export default function* rootSaga() {
  yield all([
		// fork(signInWithFBEmail),
		fork(logIn),
		fork(signUp),
		fork(signOut),
		// fork(signUpWithFBEmail),
  ]);
}
