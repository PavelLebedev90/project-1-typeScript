import {v1} from 'uuid';
import {ProfileAPIType} from '../component/Profile/ProfileContainer';

export type ActionProfileType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText> |
    ReturnType<typeof setUserProfile>

export type ProfilePageType = {
    profile: Array<ProfileAPIType>
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


const initialState: ProfilePageType = {
    profile: [],
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'It\'s my first post', likesCount: 5},
        {id: v1(), message: 'What are you doing maaaaaan?', likesCount: 16},
    ],
    newPostText: 'learn React'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newTask = {id: v1(), message: state.newPostText, likesCount: 0};
            return  {...state, posts: [...state.posts, newTask],newPostText: '' }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: [action.userProfile]}
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}

export const setUserProfile = (userProfile: ProfileAPIType) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    } as const
}