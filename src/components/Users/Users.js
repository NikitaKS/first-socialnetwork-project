import React from 'react';
import s from "./users.module.css";
import defaultUserPhoto from "../../assets/img/userdef.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    return (
        <div>

            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.userPhoto}
                                         src={u.photos.small !== null ? u.photos.small : defaultUserPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {

                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    :
                                    <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
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
