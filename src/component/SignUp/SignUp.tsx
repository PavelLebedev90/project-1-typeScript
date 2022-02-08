import React from 'react';
import classes from './SignUp.module.css';
import {NavLink} from 'react-router-dom';

type SignUpType = {
    isAuth: boolean
    login: null | string

}

export function SignUp(props: SignUpType) {
    return (
        <div className={classes.sign}>
            <h1 className={classes.title}>Your Best Social Networks</h1>
            <p className={classes.subtitle}>Make your creative works online and deliver to the world </p>
            {
                props.isAuth
                ?
                <div className={classes.authDescription}>
                    Your registration name is <span className={classes.login}>{props.login}</span>
                </div>
                :
                <NavLink to={'/login'}>
                    <div className={classes.registration}>SIGN IN</div>
                </NavLink>
            }

        </div>
    )
}