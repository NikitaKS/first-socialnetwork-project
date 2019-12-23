const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';

let initialState = {
    users: [],
    newPostText: ''
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed:true}
                    }
                    return u;
                })
            };


        case UNFOLLOW:
            return  {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed:false}
                    }
                    return u;
                })
            };
        case SET_USER:
            return {...state, users:[...state.users, ...action.users]};

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USER, users});
export default usersReducer;