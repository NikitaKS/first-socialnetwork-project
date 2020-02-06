import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {loginTC} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder='Email'
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} type='password'
                       placeholder='Password' validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox" validate={[requiredField]}/> remember me
            </div>
            {
                props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
const mstp = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};
const mdtp = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            let thunk = loginTC(email, password, rememberMe);
            dispatch(thunk);
        }
    }
};

export default connect(mstp, mdtp)(Login);