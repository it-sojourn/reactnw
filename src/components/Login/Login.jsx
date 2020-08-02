import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createField, Element} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormControls/FormControls.module.css';


const Input =  Element('input');

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input,{type: 'password'},'')}
            {createField(null, 'rememberMe', [],Input,{type: 'checkbox'},'Remember me')}
            {
                error && <span className={s.formSummaryError}>{error}</span>
            }
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);