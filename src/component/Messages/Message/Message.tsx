import React from "react";
import {NavLink} from "react-router-dom";
import {MessageType} from '../../../Redux/dialogs-reducer';



type stateMessageType = {
    stateMessage: Array<MessageType>
}

export function Message(props: stateMessageType) {
    return (
        <div>
            {

                props.stateMessage.map(m => <div key={m.id}> <NavLink to={`./${m.id}`}>{m.name}</NavLink> </div>)

            }

        </div>
    )
}