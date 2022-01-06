import {v1} from 'uuid';
import {ActionType, ProfilePageType} from './State';

export type ActionProfileType = ReturnType<typeof addPost_AC> | ReturnType<typeof updateNewPostText_AC>


const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 3},
        {id: v1(), message: 'It\'s my first post', likesCount: 5},
        {id: v1(), message: 'What are you doing maaaaaan?', likesCount: 16},
    ],
    newPostText: 'learn React'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newTask = {id: v1(), message: state.newPostText, likesCount: 0};
            return  {...state, posts: [...state.posts, newTask],newPostText: '' }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
    }
    return state
}

export const addPost_AC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostText_AC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}