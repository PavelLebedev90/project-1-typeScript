import React, {ChangeEvent} from 'react';
import {Message} from '../Message/Message';
import classes from '../../SignUp/SignUp.module.css';
import s from '../Messages.module.css';
import {DialogType, MessageType} from '../../../Redux/dialogs-reducer';


type stateDialogType = {
    stateDialogs: Array<DialogType>
    updateNewDialogText: (title: string) => void
    addDialog: () => void
    value: string
    stateMessage: Array<MessageType>

}


export function Dialog(props: stateDialogType) {

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewDialogText(e.currentTarget.value)
    }

    const onClick = () => {
        props.addDialog()
    }

    return (
        <div className={classes.sign}>
            <div className={s.messages}>
                <div className={s.item}>
                    <Message stateMessage={props.stateMessage}/>
                </div>
                <div className={s.dialog}>
                    {
                        props.stateDialogs.map(m => <div key={m.id}>{m.title}</div>)
                    }
                    <textarea value={props.value} onChange={onChange}/>
                    <button onClick={onClick}>add</button>
                </div>
            </div>
        </div>

    )
}

