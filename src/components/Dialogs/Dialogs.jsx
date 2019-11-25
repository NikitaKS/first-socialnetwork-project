import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let messageRef = React.createRef();
    const addMessage = () => {
        let newMessage = messageRef.current.value;
        alert(newMessage);
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
                <textarea ref={messageRef}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
};

export default Dialogs;
