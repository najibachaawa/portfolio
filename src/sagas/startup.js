import {
    takeEvery, call, put, all,
   } from 'redux-saga/effects';
   import loginActions from '../reducers/login';
   
   import { setAuthorizationBearer } from '../requests';
   import startupActions, { startupTypes } from '../reducers/startup';
   
   function* startup() {
     try {
       if (localStorage.getItem('token')) {
         setAuthorizationBearer(localStorage.getItem('token'));
         yield put(loginActions.loginSuccess({ data: { token: localStorage.getItem('token') } }));
       }
       yield put(startupActions.startupEnd());
     } catch (e) {
       yield put(startupActions.startupEnd());
     }
   }
   
   export default function* () {
     yield takeEvery(startupTypes.startup, startup);
   }