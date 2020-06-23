import createRedux from '../utils/createRedux';
const INITIAL_STATE = { fetching: false, data: null, error: '' };
const loginRequest = (state) => (Object.assign(Object.assign({}, state), { error: '', fetching: true }));
const loginSuccess = (state, action) => (Object.assign(Object.assign({}, state), { fetching: false, data: action.data }));
const loginFailure = (state, action) => (Object.assign(Object.assign({}, state), { error: action.error, fetching: false, data: null }));
const logout = (state, action) => INITIAL_STATE;
const { actions, types: loginTypes, reducer } = createRedux(INITIAL_STATE, {
    logout,
    loginFailure,
    loginRequest,
    loginSuccess
});
export default actions;
export { loginTypes, reducer };
