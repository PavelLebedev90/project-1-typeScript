
import classes from "./../SignUp/SignUp.module.css";
import {connect} from 'react-redux';
import Users from './Users';
import {StateType} from '../../Redux/State';
import {addDialog_AC, updateNewDialogText_AC} from '../../Redux/dialogs-reducer';
import {AppStateType} from '../../Redux/redux-store';
import {ActionUsersType, followed_AC, setUsers_AC, unFollowed_AC, UserType} from '../../Redux/users-reducer';

type dispatchUsersType = (action: ActionUsersType) =>void

let mapStateToProps = (state: AppStateType) => {

    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: dispatchUsersType) => {
    return {
        follow: (userID:string) => {
            dispatch(followed_AC(userID));
        },
        unFollow: (userID:string) => {
            dispatch(unFollowed_AC(userID));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers_AC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

