import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
    render = () => {
        return (
            <div>
                My Posts
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message='How are u?'/>
                    <Post message='Its my first post'/>
                </div>
            </div>
        );
    }
}

export default MyPosts;