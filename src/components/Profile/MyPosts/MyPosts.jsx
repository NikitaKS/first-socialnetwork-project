import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';

const MyPosts = (props) => {
    let inputRef = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = inputRef.current.value;
        props.updateNewPostText(text);
    };

    let PostsElements = props.posts.map(item => <Post message={item.message} like={item.like}/>);
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={inputRef} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;

Post.propTypes = {
    message: PropTypes.string
};