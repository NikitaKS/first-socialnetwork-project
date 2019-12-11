import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://ux.pub/wp-content/uploads/2019/11/1-11.png"
                    alt=""/>
            </div>
            <div className={s.DescBlock}> ava+desc</div>
        </div>
    );
}

export default ProfileInfo;