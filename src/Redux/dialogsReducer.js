import ava from "../AVA.jpg";

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
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {message: action.newMessageText, id: 1};
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            };

        default:
            return state;
    }
};
export const onAddMessageTextActionCreator = (newMessageText) => ({type: ADD_NEW_MESSAGE, newMessageText});
export default dialogsReducer;