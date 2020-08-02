import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import s from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={s.preload}>
        <img src={preloader} alt=''/>
    </div>
}

export default Preloader;