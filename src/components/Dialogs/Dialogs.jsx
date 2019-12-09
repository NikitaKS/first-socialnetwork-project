import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {onAddMessageTextActionCreator, onMessageChangeTextActionCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {
    const addMessage = () => {
    props.dispatch(onAddMessageTextActionCreator());
    };
    const onChangeMessage = (e) => {
        let newMessage = e.currentTarget.value;
        props.dispatch(onMessageChangeTextActionCreator(newMessage));
    };
    let DialogsItems = props.state.dialogData.map(item => <DialogItem name={item.name} id={item.id}
                                                                      img={item.img.ava}/>);
    let MessageItems = props.state.messageData.map(item => <Message message={item.message} id={item.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsItems}
            </div>
            <div className={s.massages}>
                {MessageItems}
                <textarea onChange={onChangeMessage}
                          placeholder={'Enter your message'}
                          value={props.state.newMessage}> </textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
};

export default Dialogs;
