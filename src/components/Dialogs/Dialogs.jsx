import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let state = props.messagePage;
    const onAddMessage = () => {
        props.addMessage();
    };
    const onChangeMessage = (e) => {
        let newMessage = e.currentTarget.value;
        props.changeMessage(newMessage);
    };
    let DialogsItems = state.dialogData.map(item => <DialogItem name={item.name} id={item.id}
                                                                img={item.img.ava}/>);
    let MessageItems = state.messageData.map(item => <Message message={item.message} id={item.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsItems}
            </div>
            <div className={s.massages}>
                {MessageItems}
                <textarea onChange={onChangeMessage}
                          placeholder={'Enter your message'}
                          value={state.newMessage}> </textarea>
                <button onClick={onAddMessage}>Send</button>
            </div>

        </div>
    )
};

export default Dialogs;
