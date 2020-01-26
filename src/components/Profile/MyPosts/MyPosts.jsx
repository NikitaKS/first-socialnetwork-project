import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.postText);
    };
    let PostsElements = props.posts.map(item => <Post message={item.message} like={item.like}/>);
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <ReduxPostForm onSubmit={onAddPost}/>
                    {/*<textarea onChange={onPostChange} ref={inputRef} value={props.newPostText}/>*/}
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'postText'}/>
            <button>Add Post</button>
        </form>
    )
};
const ReduxPostForm = reduxForm({form: 'postForm'})(PostForm);

Post.propTypes = {
    message: PropTypes.string
};