import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let DialogsItems = props.state.dialogData.map(item => <DialogItem name={item.name} id={item.id}/>);
    let MessageItems = props.state.messageData.map(item => <Message message={item.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsItems}
            </div>
            <div className={s.massages}>
                {MessageItems}
            </div>
        </div>
    )
};

export default Dialogs;
