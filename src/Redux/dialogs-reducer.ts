import {v1} from 'uuid';
import {ActionType, DialogsPageType, DialogType} from './State';

export type ActionDialogsType = ReturnType<typeof addDialog_AC> | ReturnType<typeof updateNewDialogText_AC>

const ADD_DIALOG_AC = 'ADD_DIALOG_AC'
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE_NEW_DIALOG_TEXT'

const initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:
            return {...state, newDialogText: action.newText}
        case ADD_DIALOG_AC:
            let newDialog: DialogType = {id: v1(), title: state.newDialogText}
            return  {...state, dialogs: [...state.dialogs, newDialog],newDialogText: '' }
        default:
            return state
    }
    return state
}


export const updateNewDialogText_AC = (newText: string) => {
    return {
        type: UPDATE_NEW_DIALOG_TEXT,
        newText
    } as const
}
export const addDialog_AC = () => {
    return {
        type: ADD_DIALOG_AC,
    } as const
}
