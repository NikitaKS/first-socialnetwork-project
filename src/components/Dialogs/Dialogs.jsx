import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return <div className={s.massage}>{props.message}</div>
};

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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
            </div>
            <div className={s.massages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    )
};

export default Dialogs;