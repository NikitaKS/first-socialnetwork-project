import React from 'react';
import s from '../Dialogs.module.css';
import PropTypes from 'prop-types';

const Message = (props) => {
    let innerms = props.id !== 1 ? s.inner : "";
    return <div className={`${s.massage} ${innerms}`}>{props.message}</div>
};

export default Message;

Message.propTypes = {
    message: PropTypes.string,
};

