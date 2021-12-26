import {v1} from 'uuid';
import {rerenderTree} from '../render';
import {ActionType, DialogType, ProfilePageType} from './State';




const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const profileReducer = (state:ProfilePageType, action: ActionType):ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      let newTask = {id: v1(), message: state.newPostText, likesCount: 0};
      state.posts.push(newTask)
      state.newPostText = ''
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
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