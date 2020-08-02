import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
          <img src='https://zm-cs.ru/files/avatars/1537189754.jpg' alt='ava'></img>
            {props.message}
            <div>{props.likes} Like</div>
        </div>
    )
}

export default Post;