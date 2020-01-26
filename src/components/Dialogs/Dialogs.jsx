import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'messageText'} placeholder={'Enter your message'}/>
            <button>Send</button>
        </form>
    )
};
const ReduxMessageForm = reduxForm({form: 'dialogMessageForm'})(addMessageForm);

export default Dialogs;
