import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/42498a22728563.560469f893794.png' alt=''></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;