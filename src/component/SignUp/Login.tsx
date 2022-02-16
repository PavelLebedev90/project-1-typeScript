import React, {useEffect} from 'react';
import classes from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {maxLength30, minLength2, renderFieldLogin, required} from '../Common/Validation';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {useNavigate} from 'react-router-dom';

export type FormDataType = {
    login:string
    password:string
    rememberMe: boolean
}

const Login = (props: InjectedFormProps<FormDataType>) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const redirect = useNavigate()
    useEffect(() => {
        if (isAuth) {
            redirect('/profile')
        }
    }, [isAuth])


    return (
        <div className={classes.wrapper}>
            <div className={classes.login}>
                <form className={classes.form} onSubmit={props.handleSubmit}>
                    <div>
                        <Field name="login"
                               component={renderFieldLogin}
                               type="text"
                               placeholder={'login'}
                               validate={[required, maxLength30, minLength2]}
                        />
                    </div>
                    <div>
                        <Field name="password"
                               component={renderFieldLogin}
                               type="password"
                               placeholder={'password'}
                               validate={[required, maxLength30, minLength2]}
                        />
                    </div>
                    <div>
                        <Field name="rememberMe"
                               component={renderFieldLogin}
                               type="checkbox"
                        />Remember Me
                    </div>
                    {
                        props.error &&
                        <div className={classes.formError}>{props.error}</div>
                    }
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


