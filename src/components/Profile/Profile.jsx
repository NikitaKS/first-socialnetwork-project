import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
    postData = [
        {id: 1, like: 11, message: 'How are u?'},
        {id: 2, like: 22, message: 'Its my first post'},
        {id: 3, like: 223, message: '123'},
    ];
    render = () => {
        return (
            <div>
                <ProfileInfo/>
                <MyPosts postData={this.postData}/>
            </div>
        );
    }
}

export default Profile;