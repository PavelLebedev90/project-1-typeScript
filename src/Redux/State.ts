import {v1} from 'uuid';
import {rerenderTree} from '../render';
import {addPost_AC, profileReducer, updateNewPostText_AC} from './profile-reducer';
import {addDialog_AC, dialogsReducer, updateNewDialogText_AC} from './dialogs-reducer';
export type ActionType = ReturnType<typeof addPost_AC> | ReturnType<typeof updateNewPostText_AC> |
    ReturnType<typeof addDialog_AC> |
    ReturnType<typeof updateNewDialogText_AC>
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    title: string
}
export type MessageType = {
    id: string
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newDialogText:string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type DataType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionType) => void
}


export const store: DataType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 3},
                {id: v1(), message: 'It\'s my first post', likesCount: 5},
                {id: v1(), message: 'What are you doing maaaaaan?', likesCount: 16},
            ],
            newPostText: 'learn React'
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), title: 'How do you do?'},
                {id: v1(), title: 'What was you learned in It'},
                {id: v1(), title: 'Yo'},
                {id: v1(), title: 'What a Fuck'},
                {id: v1(), title: 'Go walk today'},
            ],
            messages: [
                {id: v1(), name: 'Pavel'},
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Roman'},
                {id: v1(), name: 'Kostya'},
                {id: v1(), name: 'Misha'},
            ],
            newDialogText: 'Hello!!!'
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        rerenderTree()
    }
}

