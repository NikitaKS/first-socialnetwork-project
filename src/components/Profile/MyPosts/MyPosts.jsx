import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';

class MyPosts extends React.Component {
    render = () => {
        let postData = [
            {id: 1, like: 11, message: 'How are u?'},
            {id: 2, like: 22, message: 'Its my first post'},
            {id: 3, like: 223, message: '123'},
        ];
        let PostsElements = postData.map(item => <Post message={item.message} like={item.like}/>);

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
                    {PostsElements}
                </div>
            </div>
        );
    }
}

export default MyPosts;

Post.propTypes = {
    message: PropTypes.string
};