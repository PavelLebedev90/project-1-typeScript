import React from "react";
import s from "./Messages.module.css"
import classes from "./../SignUp/SignUp.module.css";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {ActionType, DataType, DialogsPageType} from '../../Redux/State';
import {DialogContainer} from './Dialog/DialogContainer';

type MessagesType = {
    stateDialogs:DialogsPageType
    dispatch: (action: ActionType)=>void
}


function Messages() {
    return (
        <DialogContainer/>
    )
}

export default Messages;


/*
(
    <div className={classes.sign}>
        <div className={s.messages}>
            <div className={s.item}>
                {/!* <Message stateMessage = {props.stateDialogs.messages}/>*!/}

            </div>
            <div className={s.dialog}>
                {/!* <DialogContainer stateDialogs={props.stateDialogs} dispatch={props.dispatch}/>*!/}
                <DialogContainer/>
            </div>
        </div>
    </div>
);*/
