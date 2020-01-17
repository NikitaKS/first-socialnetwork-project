import {userAPI as usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';
const SET_CURRENT_PAGE = 'SET-CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWPROGRESS = 'TOGGLE_IS_FOLLOWPROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USER:
            return {...state, users: action.users};
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWPROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
};

export const setUsersAC = (users) => ({type: SET_USER, users});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingAC = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWPROGRESS, isFollowing, userId});
export const setTotalusersCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

//SANKA
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        // if (this.props.users.length === 0) {
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalusersCountAC(data.totalCount));
        });
    }
    // } else {
    //     this.props.toggleIsFetching(false);
    // }
};

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingAC(true, userId));

        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowingAC(false, userId));
        });
    }
};
export const unFollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingAC(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(toggleIsFollowingAC(false, userId));
        });
    }
};


export default usersReducer;