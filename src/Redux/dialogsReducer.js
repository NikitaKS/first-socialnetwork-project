const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newtext;
            return state;
        case ADD_NEW_MESSAGE:
            let newMessage = {message: state.newMessage, id: 1};
            state.messageData.push(newMessage);
            state.newMessage = '';
            return state;
        default:
            return state;
    }
};
export const onAddMessageTextActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const onMessageChangeTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newtext: text});
export default dialogsReducer;