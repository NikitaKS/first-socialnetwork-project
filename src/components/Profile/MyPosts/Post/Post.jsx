import React from 'react';
import s from './Post.module.css';
import ava from '../../../../AVA.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={ava} alt=""/>
            {props.message}
            <div>
                <span>like: {props.like}</span>
            </div>

        </div>
    );
};

export default Post;