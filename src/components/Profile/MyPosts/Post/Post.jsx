import React from 'react';
import s from './Post.module.css';
import ava from '../../../../AVA.jpg'

class Post extends React.Component {
    render = () => {
        return (
            <div className={s.item}>
                <img src={ava} alt=""/>
                { this.props.message }
                <div>
                    <span>like: { this.props.like }</span>
                </div>

            </div>
        );
    }
}

export default Post;