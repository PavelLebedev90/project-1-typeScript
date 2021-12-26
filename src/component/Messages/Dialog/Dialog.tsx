import React, {ChangeEvent} from 'react';
import { addDialog_AC, updateNewDialogText_AC} from '../../../Redux/dialogs-reducer';
import {ActionType, DialogType} from '../../../Redux/State';


type stateDialogType = {
    stateDialog: Array<DialogType>
    dispatch: (action: ActionType)=>void
}

export function Dialog(props:stateDialogType) {

    const OnchangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewDialogText_AC(e.currentTarget.value))
    }
    const onClickHandler = () => {
          props.dispatch(addDialog_AC());
      }

    return (
        <div>
            {
                props.stateDialog.map(m => <div key={m.id}>{m.title}</div>)
            }
            <textarea onChange={OnchangeHandler}/><button onClick={onClickHandler}>add</button>
        </div>
    )
}