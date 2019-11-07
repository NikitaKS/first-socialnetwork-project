import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/2">Sveta</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/3">Andrey</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/4">Oleg</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/5">Zheka</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How are u?</div>
                <div className={s.massage}>Good</div>
            </div>
        </div>
    )
};

export default Dialogs;