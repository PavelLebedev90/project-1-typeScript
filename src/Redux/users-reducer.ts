import {UsersAPIType} from '../component/Users/UsersContainer';


export type ActionUsersType = ReturnType<typeof follow> |
    ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers>
|ReturnType<typeof setCurrentPage>
| ReturnType<typeof setTotalUsersCount>
| ReturnType<typeof setIsFetching>
| ReturnType<typeof setFollowProgress>

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
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOW_IN_PROGRESS = 'SET_FOLLOW_IN_PROGRESS'

export type InitialStateType = {
    users: Array<UsersAPIType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
    folowInProgress: number[]
}

let initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    folowInProgress: []
}

export const usersReducer = (state = initialState, action: ActionUsersType): InitialStateType => {

    switch (action.type) {
        case FOLLOWED:
        return {...state, users: state.users.map(m=>m.id === action.userID?
                {...m, followed: !m.followed}:m)}
        case UNFOLLOWED:
            return {...state, users: state.users.map(m=>m.id === action.userID?
                    {...m, followed: !m.followed}:m)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_FOLLOW_IN_PROGRESS:
          return   action.isFetching
                ?
           {
               ...state, folowInProgress: [...state.folowInProgress, action.userId]
           }
           :
              {...state, folowInProgress: state.folowInProgress.filter(f=>f !==action.userId)}
        default:
            return state
    }
}

export const follow = (userID:number) => {
    return {
        type: FOLLOWED,
        userID
    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: UNFOLLOWED,
        userID
    } as const
}

export const setUsers = (users: Array<UsersAPIType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage:number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount:number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}
export const setIsFetching = (isFetching:boolean) => {
    return {
        type: SET_IS_FETCHING,
        isFetching
    } as const
}
export const setFollowProgress = (isFetching:boolean, userId:number) => {
    return {
        type: SET_FOLLOW_IN_PROGRESS,
        isFetching,
        userId
    } as const
}