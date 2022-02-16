import {v1} from 'uuid';
import {ProfileAPIType} from '../component/Profile/ProfileContainer';
import {getStatus, getUserProfile, updateStatus} from '../api/api';
import {MyPostFormType} from '../component/Profile/MyPosts/MyPostForm';

export type ActionProfileType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
| ReturnType<typeof setUserStatus>

export type ProfilePageType = {
    profile: Array<ProfileAPIType>
    posts: Array<PostType>
    status:string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


const initialState: ProfilePageType = {
    profile: [],
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'It\'s my first post', likesCount: 5},
        {id: v1(), message: 'What are you doing maaaaaan?', likesCount: 16},
    ],
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newTask = {id: v1(), message: action.data.newPostText, likesCount: 0};
            return  {...state, posts: [...state.posts, newTask] }
        case SET_USER_PROFILE:
            return {...state, profile: [action.userProfile]}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = (data:MyPostFormType) => {
    return {
        type: ADD_POST,
        data
    } as const
}


export const setUserProfile = (userProfile: ProfileAPIType) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    } as const
}
export const setUserStatus = (status:string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const getUserStatusThunk = (id:string)=>(dispatch:(action:ActionProfileType)=>void)=>{
    getStatus(id)
        .then(data => {
            dispatch(setUserStatus(data.data))

        })
}
export const setUserStatusThunk = (status:string)=>(dispatch:(action:ActionProfileType)=>void)=>{
    updateStatus(status)
        .then(() => {
            dispatch(setUserStatus(status))

        })
}

export const setUserProfileThunk = (id:string)=>(dispatch:(action:ActionProfileType)=>void)=>{
    getUserProfile(id)
        .then(data => {
            dispatch(setUserProfile(data))

        })
}
