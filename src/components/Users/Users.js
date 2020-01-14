import React from 'react';
import s from "./users.module.css";
import defaultUserPhoto from "../../assets/img/userdef.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.pagination}>
                {
                    pages.map(item => {
                        return <span onClick={() => {
                            props.onPageChanged(item)
                        }} className={props.currentPage === item ? s.active : ''}>{item}</span>
                    })
                }
            </div>
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
                                {u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {'API-KEY': '6f891ce6-6725-4088-ae30-9893aa916124'}
                                            }
                                        ).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {'API-KEY': '6f891ce6-6725-4088-ae30-9893aa916124'}
                                            }
                                        ).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
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