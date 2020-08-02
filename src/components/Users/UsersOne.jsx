import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let UsersOne = ({user, followingInProgress, unfollow, follow, ...props}) => {
    return <div>
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=''/>
                </NavLink>
            </div>
            <div className={s.follow}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>
                }
            </div>
            <div className={s.namestatus}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div className={s.location}>
                {/*<div>{user.location.city}</div>*/}
                {/*<div>{user.location.country}</div>*/}
            </div>
        </div>
    </div>

}

export default UsersOne;