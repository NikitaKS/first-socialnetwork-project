import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
    render = () => {
        return (
            <div>
                <div>
                    <img
                        src="http://onlinetao.ru/blog/wp-content/uploads/2015/07/hq-wallpapers_ru_nature_35955_1920x1200.jpg"
                        alt=""/>
                </div>
                <div className={s.DescBlock}> ava+desc</div>
            </div>
        );
    }
}

export default ProfileInfo;