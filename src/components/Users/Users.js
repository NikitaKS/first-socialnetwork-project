import React from 'react';
import s from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photo: 'http://img.rosbalt.ru/photobank/0/0/a/b/nxqXKbjv-800.jpg',
                    followed: false,
                    status: 'how are u',
                    fullName: 'Dima',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photo: 'http://img.rosbalt.ru/photobank/0/0/a/b/nxqXKbjv-800.jpg',
                    followed: true,
                    status: 'music',
                    fullName: 'Ola',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photo: 'http://img.rosbalt.ru/photobank/0/0/a/b/nxqXKbjv-800.jpg',
                    followed: false,
                    status: 'films',
                    fullName: 'Serg',
                    location: {city: 'Sv', country: 'Ukraine'}
                },
            ]
        );
    }
    return (
        <div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.userPhoto} src={u.photo} alt=""/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                        </div>
                        </span>
                        <span>
                            <div>{u.fullName}</div>
                            <div> {u.status} </div>
                    </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </div>
                })
            }
        </div>
    )
};
export default Users;