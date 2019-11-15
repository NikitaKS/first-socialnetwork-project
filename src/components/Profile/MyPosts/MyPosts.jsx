import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';

class MyPosts extends React.Component {
    render = () => {
        let PostsElements = this.props.postData.map(item => <Post message={item.message} like={item.like}/>);
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