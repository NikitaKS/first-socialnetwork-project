import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://ux.pub/wp-content/uploads/2019/11/1-11.png"
                    alt=""/>
            </div>
            <div className={s.DescBlock}>
                <img src={props.profile.photos.small} alt=""/>
            </div>
            <div>
                aboutMe: {props.profile.aboutMe} <br/>
                fullName: {props.profile.fullName} <br/>
                UserID: {props.profile.userId} <br/>
            </div>
        </div>
    );
}

export default ProfileInfo;