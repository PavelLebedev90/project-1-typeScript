import React from 'react';
import classes from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

export type FormDataType = {
    login:string
    password:string
    rememberMe: boolean
}

const Login = (props: InjectedFormProps<FormDataType>) => {



    return (
        <div className={classes.wrapper}>
            <div className={classes.login}>
                <form className={classes.form} onSubmit={props.handleSubmit}>
                    <div>
                        <Field name="login" component="input" type="text" placeholder={'login'} />
                    </div>
                    <div>
                        <Field name="password" component="input" type="password" placeholder={'password'} />
                    </div>
                    <div>
                        <Field name="rememberMe" component="input" type="checkbox" />Remember Me
                    </div>
                    <div>
                        <button className={classes.formButton}>sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(Login)


