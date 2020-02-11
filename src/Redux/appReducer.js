import {authAPI} from "../api/api";
import {authMeThunk} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const setInitializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializeAppTC = () => (dispatch) => {
    let promise = dispatch(authMeThunk());
    promise.then(() => {
        dispatch(setInitializedSuccess())
    })

};
export default appReducer;