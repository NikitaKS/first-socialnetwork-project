import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    };

    addPost = () => {
        this.props.dispatch(addPostActionCreator());
    };
    onPostChange = () => {
        let text = this.inputRef.current.value;
        this.props.dispatch(onPostChangeActionCreator(text));
    };
    render = () => {
        let PostsElements = this.props.postData.map(item => <Post message={item.message} like={item.like}/>);
        return (
            <div className={s.postBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea onChange={this.onPostChange} ref={this.inputRef} value={this.props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={this.addPost}>Add Post</button>
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