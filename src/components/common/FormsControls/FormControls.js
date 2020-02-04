import React from 'react';
import s from './FormControls.module.css'

const FormControl = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${showError ? s.error : ''}`}>
            <div className="wrapper">
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
};


export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} > <input{...input} {...restProps}/> </FormControl>
};