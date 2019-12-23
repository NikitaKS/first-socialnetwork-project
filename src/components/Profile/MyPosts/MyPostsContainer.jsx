import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     // let state = props.store.getState();
//
//     /*let addPost = () => {
//         let action = addPostActionCreator();
//         props.store.dispatch(action);
//         //props.dispatch(addPostActionCreator());
//     };
//     let onPostChange = (text) => {
//         let action = onPostChangeActionCreator(text);
//         props.store.dispatch(action)
//         //this.props.dispatch(onPostChangeActionCreator(text));
//     };*/
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     let action = addPostActionCreator();
//                     store.dispatch(action);
//                     //props.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text) => {
//                     let action = onPostChangeActionCreator(text);
//                     store.dispatch(action)
//                     //this.props.dispatch(onPostChangeActionCreator(text));
//                 };
//                 return <MyPosts updateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 newPostText={state.profilePage.newPostText}
//                                 posts={state.profilePage.postData}/>
//             }
//             }
//         </StoreContext.Consumer>
//     );
//
// };

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postData,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
