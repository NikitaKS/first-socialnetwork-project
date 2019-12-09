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
                         dispatch={this.props.dispatch}/>
            </div>
        );
    }
}

export default Profile;