import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";
import ReduxMessageForm from './AddMessageForm'

const Dialogs = (props) => {

    let state = props.messagePage;

    const onAddMessage = (values) => {
        props.addMessage(values.messageText);
    };

    let DialogsItems = state.dialogData.map(item => <DialogItem name={item.name} id={item.id}
                                                                img={item.img.ava}/>);
    let MessageItems = state.messageData.map(item => <Message message={item.message} id={item.id}/>);
    if (props.isAuth === false) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsItems}
            </div>
            <div className={s.massages}>
                {MessageItems}
                <ReduxMessageForm onSubmit={onAddMessage}/>
            </div>

        </div>
    )
};


export default Dialogs;
