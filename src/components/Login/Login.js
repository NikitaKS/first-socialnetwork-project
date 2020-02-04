import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input} from "../common/FormsControls/FormControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} placeholder='Login'
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder='Password' validate={[requiredField]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox" validate={[requiredField]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {

    };
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
const mstp = (state) => {
    return {
        form: state.form
    }
};
const mdtp = (dispatch) => {
    return {}
};

export default connect(mstp, mdtp)(Login);