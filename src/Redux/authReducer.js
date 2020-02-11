import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export const setAuthUsersDataAC = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
});

export const authMeThunk = () => (dispatch) => {
    return authAPI.me().then(response => {
        let {id, email, login} = response.data.data;
        if (response.data.resultCode === 0) {
            dispatch(setAuthUsersDataAC(id, email, login, true));
        }
    });

};
export const loginTC = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authMeThunk());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
            let action = stopSubmit('login', {_error: message});
            dispatch(action)
        }
    })
};
export const logOutTC = () => (dispatch) => {
    authAPI.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUsersDataAC(null, null, null, false));
        }
    })
};
export default authReducer;