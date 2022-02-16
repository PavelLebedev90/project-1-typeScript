import React from 'react';
import {addDialog} from '../../../Redux/dialogs-reducer';
import {Dialog} from './Dialog';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
    return {
        stateDialogs: state.dialogsPage.dialogs,
        stateMessage: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

export const DialogContainer = connect(mapStateToProps, {addDialog})(Dialog)


