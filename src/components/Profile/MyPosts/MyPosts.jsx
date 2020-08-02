import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Element} from "../../common/FormControls/FormControls";

const MyPosts = (props) => {
    console.log('RENDER RENDER REKT')

    let postsElements = props.posts.map(
        p => <Post key={p.id} likes={p.likes} message={p.message}/>
    )

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <textarea onChange={onPostChange}*/}
            {/*                  placeholder='Tell plz about smth'*/}
            {/*                  ref={newPostElement}*/}
            {/*                  value={props.newPostText}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={onAddPost}>Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={s.posts}>
                {postsElements}
            </div>
            <AddPostReduxForm onSubmit={addNewPost}/>
        </div>
    )
}

const Textarea = Element('textarea')
const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'}
                       placeholder={'Tell smth'}
                validate={[required, maxLength10]}
                />
            </div>
            <div><button>Post</button></div>
        </form>
    </div>
}

const AddPostReduxForm = reduxForm({
    form: 'addPost'
})(AddPostForm)

export default MyPosts;