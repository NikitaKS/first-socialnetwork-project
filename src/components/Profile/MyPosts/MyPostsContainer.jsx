import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
        //props.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action)
        //this.props.dispatch(onPostChangeActionCreator(text));
    };
    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     newPostText={state.profilePage.newPostText}
                     posts={state.profilePage.postData}/>);

};


export default MyPostsContainer;
