import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import ava from '../../../AVA.jpg'

const DialogItem = (props) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src={props.img} alt=""/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;

DialogItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
};