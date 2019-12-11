import React from 'react';
import {onAddMessageTextActionCreator, onMessageChangeTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage;
    const addMessage = () => {
        let action = onAddMessageTextActionCreator();
        props.store.dispatch(action)
    };
    const changeMessage = (newMessage) => {
        let action = onMessageChangeTextActionCreator(newMessage);
        props.store.dispatch(action)
    };

    return (<Dialogs messagePage={state}
                     addMessage={addMessage}
                     changeMessage={changeMessage}/>)
};

export default DialogsContainer;
