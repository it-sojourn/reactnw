import React from 'react';
import s from './FormControls.module.css';
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div><textarea {...input} {...props} /></div>

        {hasError && <span>{meta.error}</span>}
    </div>
}

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div><Element {...input} {...props} /></div>

        {hasError && <span>{meta.error}</span>}
    </div>
}


export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />
        {text}
    </div>
)