import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postData: [
        {id: 1, like: 11, message: 'How are u?'},
        {id: 2, like: 22, message: 'Its my first post'},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, like: 0, message: action.postText};
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter((p) => p.id !== action.postId)
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS_PROFILE:
            return {...state, status: action.status};

        default:
            return state;
    }
};

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export const deleteActionCreator = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS_PROFILE, status});

export const getUserProfileThunk = (userId) => {
    return (dispatch, getState) => {
        userAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};
export const getUserStatusTC = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setUserStatus(res.data))
    })
};
export const updateStatusTC = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }

    })
};
export default profileReducer;
