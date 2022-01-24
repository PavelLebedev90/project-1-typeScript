import {connect} from 'react-redux';
import userClass from './Users.module.css'
import {
    ActionUsersType, follow,
    InitialStateType, setCurrentPage, setFollowProgress, setIsFetching, setTotalUsersCount, setUsers, unFollow,

} from '../../Redux/users-reducer';
import {AppStateType} from '../../Redux/redux-store';
import React from 'react';
import axios from 'axios';
import classes from '../SignUp/SignUp.module.css';
import {PaginatedItems} from './Paginate/Paginate';
import Preloader from '../Common/Preloader/Preloader';
import {getUsers} from '../../api/api';

type dispatchUsersType = (action: ActionUsersType) => void
export type MapStateType = (state: AppStateType) => InitialStateType
export type MapDispatchType = (dispatch: dispatchUsersType) => FunctionTypeForUsers
export type FunctionTypeForUsers = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UsersAPIType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setFollowProgress: (isFetching: boolean, id:number) => void
}

export const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaznFcbeSJTVKFzMptmjTuD6XEAkUuN7SxkA&usqp=CAU'

export type UsersAPIType = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    uniqueUrlName: null | string

}


class UsersClass extends React.Component<FunctionTypeForUsers & InitialStateType> {

    componentDidMount() {
        console.log('UsersClass is mound')
        this.props.setIsFetching(true)

            getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    currentPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)

        getUsers(page,this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)

            })
    }

    render() {
        return (
            <div className={classes.sign}>
                <div>
                    {this.props.isFetching ? <Preloader/> : null}

                    <PaginatedItems itemsPerPage={this.props.pageSize}
                                    isFetching= {this.props.isFetching}
                                    users={this.props.users}
                                    follow={this.props.follow}
                                    unFollow={this.props.unFollow}
                                    currentPageChanged={this.currentPageChanged}
                                    totalUsersCount={this.props.totalUsersCount}
                                    pageSize={this.props.pageSize}
                                    folowInProgress={this.props.folowInProgress}
                                    setFollowProgress={this.props.setFollowProgress}
                    />

                </div>
            </div>

        )
    }
}

export default UsersClass


export let mapStateToProps: MapStateType = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folowInProgress:state.usersPage.folowInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setFollowProgress
})(UsersClass)

