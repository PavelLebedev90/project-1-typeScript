import React from 'react';
import classes from './SignUp.module.css';
import {NavLink} from 'react-router-dom';
import {SignUp} from './SignUp';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {InitialStateAuthType, setUserData} from '../../Redux/auth-reducer';

export type mapStateToProps = {
    isAuth:boolean
    login: null | string
    userId: null | number
    email: null | string
}
export type mapDispathToProps = {
    setUserData:(userId: number, email: string, login: string) =>void
}

class SignUpContainer extends React.Component<mapDispathToProps & InitialStateAuthType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <SignUp
                 login={this.props.login} isAuth={this.props.isAuth}
            />
        )
    }

}

const mapStateToProps = (state: AppStateType) => {
 return {
     isAuth: state.auth.isAuth,
     login: state.auth.login,
     userId: state.auth.userId,
     email: state.auth.email
 }

}
export default connect(mapStateToProps, {setUserData})(SignUpContainer)