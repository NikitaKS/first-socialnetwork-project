import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = () => {
    let dialogData = [
        {name: 'Dima', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Nikita', id: 3},
        {name: 'Sergei', id: 4},
        {name: 'Ola', id: 5},
        {name: 'Lera', id: 6}
    ];
    let messageData = [
        {message: 'Hi', id: 1},
        {message: 'Hi,How are u?', id: 2},
        {message: 'Good', id: 3},
        {message: 'Nie', id: 4},
        {message: 'React', id: 5},
        {message: 'Learn', id: 6}
    ];
    let DialogsItems = dialogData.map(item => {
        return <DialogItem name={item.name} id={item.id}/>;
    });
    let MessageItems = messageData.map(item => <Message message={item.message}/>);
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
