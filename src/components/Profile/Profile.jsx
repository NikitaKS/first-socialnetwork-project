import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
class Profile extends React.Component {
    render = () => {
        return (
            <div>
                <div>
                    <img
                        src="http://onlinetao.ru/blog/wp-content/uploads/2015/07/hq-wallpapers_ru_nature_35955_1920x1200.jpg"
                        alt=""/>
                </div>
                <div> ava+desc</div>
                <MyPosts/>
            </div>
        );
    }
}

export default Profile;