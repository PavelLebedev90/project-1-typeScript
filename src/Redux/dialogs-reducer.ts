import {v1} from 'uuid';
import {AddMessageFormType} from '../component/Messages/Dialog/AddMessageForm';


export type ActionDialogsType = ReturnType<typeof addDialog>


export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type DialogType = {
    id: string
    title: string
}
export type MessageType = {
    id: string
    name: string
}
const ADD_DIALOG_AC = 'ADD_DIALOG_AC'


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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsType): DialogsPageType => {
    switch (action.type) {
        case ADD_DIALOG_AC:
            let newDialog: DialogType = {id: v1(), title: action.data.newMessage}
            return  {...state, dialogs: [...state.dialogs, newDialog]}
        default:
            return state
    }
}


export const addDialog = (data:AddMessageFormType) => {
    return {
        type: ADD_DIALOG_AC,
        data
    } as const
}
