import React from 'react';
import {SignUp} from './SignUp';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {setUserDataThunk} from '../../Redux/auth-reducer';

export type mapStateToProps = {
    isAuth: boolean
    login: null | string
    userId: null | number
    email: null | string
}
export type mapDispathToProps = {
    setUserDataThunk: () => void
}

class SignUpContainer extends React.Component<mapDispathToProps & mapStateToProps> {

    componentDidMount() {
        this.props.setUserDataThunk()
        // getMe()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data.data
        //             this.props.setUserData(id, email, login)
        //         }
        //     })
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
export default connect(mapStateToProps, {setUserDataThunk})(SignUpContainer)