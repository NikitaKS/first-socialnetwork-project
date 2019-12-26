import React from 'react';
import s from './users.module.css';
import * as axios from "axios";
import defaultUserPhoto from '../../assets/img/userdef.png';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            debugger
            props.setUsers(response.data.items);
        });

    }
    return (
        <div>
            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.userPhoto} src={u.photos.small!== null?u.photos.small: defaultUserPhoto} alt=""/>
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
                            <div>{u.name}</div>
                            <div> {u.status} </div>
                    </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </div>
                })
            }
        </div>
    )
};
export default Users;