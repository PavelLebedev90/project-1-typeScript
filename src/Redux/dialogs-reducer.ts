import {v1} from 'uuid';
import {rerenderTree} from '../render';
import {ActionType, DialogsPageType, DialogType} from './State';


const ADD_DIALOG_AC = 'ADD_DIALOG_AC'
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE_NEW_DIALOG_TEXT'


export const dialogsReducer = (state:DialogsPageType, action: ActionType):DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.newText
            break;
        case ADD_DIALOG_AC:
            let newDialog:DialogType = {id: v1(), title: state.newDialogText}
            state.dialogs.push(newDialog)
            state.newDialogText = ''
            break
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
