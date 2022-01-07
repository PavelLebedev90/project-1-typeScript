import {v1} from 'uuid';
import {ActionType, ProfilePageType} from './State';
import {UsersAPIType} from '../component/Users/UsersClass';

export type ActionUsersType = ReturnType<typeof followed_AC> |
    ReturnType<typeof unFollowed_AC> |
    ReturnType<typeof setUsers_AC>

export type UsersType = {
    [key:string]: Array<UserType>
}
export type UserType = {
    id:string
    userPhoto:string
    followed: boolean
    fullname:string
    status:string
    location: {
        city:string
        country:string
    }
}

const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'


let initialState:{users: Array<UsersAPIType>} = {
    users: []
}

export const usersReducer = (state = initialState, action: ActionUsersType): {users: Array<UsersAPIType>} => {

    switch (action.type) {
        case FOLLOWED:
        return {...state, users: state.users.map(m=>m.id === action.userID?
                {...m, followed: true}:m)}
        case UNFOLLOWED:
            return {...state, users: state.users.map(m=>m.id === action.userID?
                    {...m, followed: false}:m)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followed_AC = (userID:number) => {
    return {
        type: FOLLOWED,
        userID
    } as const
}
export const unFollowed_AC = (userID: number) => {
    return {
        type: UNFOLLOWED,
        userID
    } as const
}

export const setUsers_AC = (users: Array<UsersAPIType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}