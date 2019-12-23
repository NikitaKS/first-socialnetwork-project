const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, like: 11, message: 'How are u?'},
        {id: 2, like: 22, message: 'Its my first post'},
        {id: 3, like: 223, message: '123'},
        {id: 3, like: 223, message: '123'},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, like: 0, message: state.newPostText};
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newtext
            };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newtext: text
    }
};
export default profileReducer;