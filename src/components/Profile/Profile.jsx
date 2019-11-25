import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {

    render = () => {
        return (
            <div>
                <ProfileInfo/>
                <MyPosts postData={this.props.profilePage.postData}
                         newPostText={this.props.profilePage.newPostText}
                         addPost={this.props.addPost}
                         updateNewPostText={this.props.updateNewPostText}/>
            </div>
        );
    }
}

export default Profile;