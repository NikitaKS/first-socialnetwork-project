import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
    render = () => {
        return (
            <div className={s.postBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="1"></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message='How are u?' like='15'/>
                    <Post message='Its my first post' like='21'/>
                </div>
            </div>
        );
    }
}

export default MyPosts;