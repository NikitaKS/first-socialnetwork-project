import React from 'react';
import s from './Post.module.css';

class Post extends React.Component {
    render = () => {
        return (
            <div className={s.item}>
                <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt=""/>
                { this.props.message }
                <div>
                    <span>like { this.props.like }</span>
                </div>

            </div>
        );
    }
}

export default Post;