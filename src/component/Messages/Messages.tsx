import React from "react";
import s from "./Messages.module.css"
import classes from "./../SignUp/SignUp.module.css";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {ActionType, DataType, DialogsPageType} from '../../Redux/State';

type MessagesType = {
    stateDialogs:DialogsPageType
    dispatch: (action: ActionType)=>void
}


function Messages(props: MessagesType) {


    return (
        <div className={classes.sign}>
            <div className={s.messages}>
                <div className={s.item}>
                    <Message stateMessage = {props.stateDialogs.messages}/>

                </div>
                <div className={s.dialog}>
                    <Dialog stateDialog = {props.stateDialogs.dialogs}
                    dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    );
}

export default Messages;