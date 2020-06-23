import { takeLatest, call, put } from 'redux-saga/effects';
import loginActions, { loginTypes } from '../reducers/login';
import { setAuthorizationBearer } from '../requests';
import { loginRequest } from '../requests/requests';
function* login(action) {
    try {
        const response = yield call(loginRequest, {
            email: action.email,
            password: action.password
        });
        if (response.code === 200) {
            localStorage.setItem('token', response.data.token);
            setAuthorizationBearer(response.data.token);
            yield put(loginActions.loginSuccess({ data: response.data }));
        }
        else {
            yield put(loginActions.loginFailure({ error: response.message, data: null, fetching: false }));
        }
    }
    catch (e) {
        console.log(e);
    }
}
function logout() {
    setAuthorizationBearer(null);
    localStorage.removeItem('token');
}
export default function* () {
    yield takeLatest(loginTypes.loginRequest, login);
    yield takeLatest(loginTypes.logout, logout);
}
