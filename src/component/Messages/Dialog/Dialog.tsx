import React, {useEffect} from 'react';
import {Message} from '../Message/Message';
import classes from '../../SignUp/SignUp.module.css';
import s from '../Messages.module.css';
import {DialogType, MessageType} from '../../../Redux/dialogs-reducer';
import {useNavigate} from 'react-router-dom';
import {AddMessageFormContainer, AddMessageFormType} from './AddMessageForm';


type stateDialogType = {
    stateDialogs: Array<DialogType>
    addDialog: (data: AddMessageFormType) => void
    stateMessage: Array<MessageType>
    isAuth: boolean
}


export function Dialog(props: stateDialogType) {
const redirect = useNavigate();


    useEffect(() => {
        if (!props.isAuth) {
            redirect('/sign_up')
        }
    }, [])


    const onSubmitNewMessage = (data: AddMessageFormType)=>{
        props.addDialog(data)
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
                    <AddMessageFormContainer onSubmit={onSubmitNewMessage}/>
                </div>
            </div>
        </div>

    )
}

