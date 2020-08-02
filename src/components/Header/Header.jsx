import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://e7.pngegg.com/pngimages/11/247/png-clipart-sitckman-meme-rage-comic-internet-meme-like-a-boss-trollface-like-a-boss-comics-white.png'
            alt='logo'>
        </img>

        <div className={s.loginBlock}>
            {
                props.isAuth
                    ? <div>
                        <div>You entried as {props.login}</div>
                        <button onClick={props.logout}>log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>

            }
        </div>
    </header>
}

export default Header;