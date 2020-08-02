import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

// const DialogItem = (props) => {
//     return (
//         <div>
//             <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
//         </div>
//     )
// }
//
// const Message = (props) => {
//     return (
//         <div>
//             <div className={s.message}>{props.message}</div>
//         </div>
//     )
// }

const FriendsPerson = (props) => {
    let path = "/friends/" + props.id;

    return (
        <div className={s.friendPerson}>
            <img src='https://pbs.twimg.com/profile_images/1247570600777973760/yO25jEfe_400x400.jpg' alt=''></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
    debugger;

}


const Friends = (props) => {
    let state = props.sidebar;

    let myFriends = state.friends.map(
        f => <FriendsPerson name={f.name} id={f.id}/>
    )


    return (
        <div>
            <div>
                {myFriends}
            </div>
        </div>
    )
}


export default Friends;