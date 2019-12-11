import ava from "../AVA.jpg";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    dialogData: [
        {name: 'Dima', id: 1, img: {ava}},
        {name: 'Sveta', id: 2, img: {ava}},
        {name: 'Nikita', id: 3, img: {ava}},
        {name: 'Sergei', id: 4, img: {ava}},
        {name: 'Ola', id: 5, img: {ava}},
        {name: 'Lera', id: 6, img: {ava}}
    ],
    messageData: [
        {message: 'Hi', id: 1},
        {message: 'Hi,How are u?', id: 2},
        {message: 'Good', id: 1},
        {message: 'Nie', id: 4},
        {message: 'React', id: 1},
        {message: 'Learn', id: 6}
    ],
    newMessage: '',
};


const dialogsReducer = (state = initialState, action) => {
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