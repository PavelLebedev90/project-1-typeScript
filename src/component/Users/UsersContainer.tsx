
import classes from "./../SignUp/SignUp.module.css";
import {connect} from 'react-redux';
import Users from './Users';
import {StateType} from '../../Redux/State';
import {addDialog_AC, updateNewDialogText_AC} from '../../Redux/dialogs-reducer';
import {AppStateType} from '../../Redux/redux-store';
import {ActionUsersType, followed_AC, setUsers_AC, unFollowed_AC, UsersType, UserType} from '../../Redux/users-reducer';
import UsersC, {UsersAPIType} from './UsersClass';

type dispatchUsersType = (action: ActionUsersType) =>void
export type MapStateType = (state: AppStateType) => {users: Array<UsersAPIType>}
export type MapDispatchType = (dispatch: dispatchUsersType) => {
    follow:(userID:number) =>void
    unFollow:(userID:number)=>void
    setUsers: (users: Array<UsersAPIType>) =>void
}

let mapStateToProps:MapStateType = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps:MapDispatchType = (dispatch: dispatchUsersType) => {
    return {
        follow: (userID:number) => {
            dispatch(followed_AC(userID));
        },
        unFollow: (userID:number) => {
            dispatch(unFollowed_AC(userID));
        },
        setUsers: (users: Array<UsersAPIType>) => {
            dispatch(setUsers_AC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)

