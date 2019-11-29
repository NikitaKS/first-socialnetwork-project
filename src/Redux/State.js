import ava from '../AVA.jpg'

let rerenderEntireTree = () => {

};

let state = {
    message: {
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
    },
    profile: {
        postData: [
            {id: 1, like: 11, message: 'How are u?'},
            {id: 2, like: 22, message: 'Its my first post'},
            {id: 3, like: 223, message: '123'},
        ],
        newPostText: ''
    },
    sidebar: [
        {name: 'Nikita', id: 1},
        {name: 'Oleg', id: 1},
        {name: 'Artur', id: 1}
    ]
};
export const addPost = () => {
    let newPost = {id: 5, like: 0, message: state.profile.newPostText};
    state.profile.postData.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newtext) => {
    state.profile.newPostText = newtext;
    rerenderEntireTree(state);
};
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};
export default state;