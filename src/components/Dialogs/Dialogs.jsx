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
const Message =(props) =>{
    return <div className={s.massage}>{props.message}</div>
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dima'} id='1'/>
                <DialogItem name={'Sveta'} id='2'/>
                <DialogItem name={'Nikita'} id='3'/>
                <DialogItem name={'Sergei'} id='4'/>
                <DialogItem name={'Ola'} id='5'/>
                <DialogItem name={'Lera'} id='6'/>
            </div>
            <div className={s.massages}>
                <Message message='Hi'/>
                <Message message='Hi, how are u?'/>
                <Message message='React!'/>
                <Message message='React!'/>
            </div>
        </div>
    )
};

export default Dialogs;