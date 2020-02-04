import React from 'react';
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormControls";

const maxLength30 = maxLengthCreator(30);
const ReduxMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={'messageText'}
                   placeholder={'Enter your message'} validate={[requiredField, maxLength30]}/>
            <button>Send</button>
        </form>
    )
};
export default reduxForm({form: 'dialogMessageForm'})(ReduxMessageForm);