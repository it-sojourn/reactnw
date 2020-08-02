import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {
    let state = props.messagePage;

    let dialogsElements = state.dialogs.map(
        d => <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
    let messagesElements = state.messages.map(
        m => <Message key={m.id} message={m.message}/>
    )

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength15 = maxLengthCreator(15);
const Textarea = Element('textarea');
const AddMessageForm = (props) => {
    return <div className={s.addMessage}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder={'Write anything'}
                validate={[required, maxLength15]}
                />
                    {/*<textarea onChange={onNewMessageChange}*/}
                    {/*          placeholder='Write anything'*/}
                    {/*          value={newMessageBody}/>*/}
            </div>
            <div>
                {/*<button onClick={onSendMessageClick}>Add message</button>*/}
                <button>Send</button>
            </div>
        </form>
    </div>
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddMessageForm)

export default Dialogs;