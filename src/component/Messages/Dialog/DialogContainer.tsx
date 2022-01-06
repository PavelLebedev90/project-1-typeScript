import React from 'react';
import {ActionDialogsType, addDialog_AC, updateNewDialogText_AC} from '../../../Redux/dialogs-reducer';
import {ActionType, DataType, DialogsPageType, StateType} from '../../../Redux/State';
import {Dialog} from './Dialog';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';

type dispatchDialogType =  (action: ActionDialogsType) => void



let mapStateToProps = (state: AppStateType) => {
    console.log(state)
    return {
        stateDialogs: state.dialogsPage.dialogs,
        stateMessage: state.dialogsPage.messages,
        value: state.dialogsPage.newDialogText
    }
}
let mapDispatchToProps = (dispatch: dispatchDialogType) => {
    return {
        onClickHandler: () => {
            dispatch(addDialog_AC());
        },
        OnchangeHandler: (title: string) => {
            dispatch(updateNewDialogText_AC(title))
        }
    }
}
export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)


