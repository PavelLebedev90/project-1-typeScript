import React, {ChangeEvent} from 'react';
import {DialogsPageType, DialogType, MessageType} from '../../../Redux/State';
import {Message} from '../Message/Message';
import classes from '../../SignUp/SignUp.module.css';
import s from '../Messages.module.css';
import {dispatchType} from '../../Profile/MyPosts/MyPostsContainer';


type stateDialogType = {
        stateDialogs: Array<DialogType>
        OnchangeHandler: (title: string) => void
        onClickHandler: () => void
        value:string
        stateMessage: Array<MessageType>

}


export function Dialog(props: stateDialogType) {

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.OnchangeHandler(e.currentTarget.value)
    }

    const onClick = () => {
      props.onClickHandler()
    }
    console.log(props.stateMessage)
    console.log(props.stateDialogs)
    console.log(props.value)
    console.log(props.OnchangeHandler)
    return (
        <div className={classes.sign}>
            <div className={s.messages}>
                <div className={s.item}>
                    <Message stateMessage = {props.stateMessage}/>
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

