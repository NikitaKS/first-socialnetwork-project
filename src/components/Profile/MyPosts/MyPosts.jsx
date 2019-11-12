import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
    render = () => {
        let postData = [
            {id: 1, like: 11, message: 'How are u?'},
            {id: 2, like: 22, message: 'Its my first post'},
            {id: 3, like: 223, message: '123'},
        ];

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
                    <Post message={postData[0].message} like={postData[0].like}/>
                    <Post message={postData[1].message} like={postData[1].like}/>
                    <Post message={postData[2].message} like={postData[2].like}/>
                </div>
            </div>
        );
    }
}

export default MyPosts;