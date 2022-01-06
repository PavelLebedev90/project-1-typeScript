import React from 'react';
import {addDialog_AC, updateNewDialogText_AC} from '../../../Redux/dialogs-reducer';
import {ActionType, DataType, DialogsPageType, StateType} from '../../../Redux/State';
import {Dialog} from './Dialog';
import {connect} from 'react-redux';
import {dispatchType} from '../../Profile/MyPosts/MyPostsContainer';

type stateDialogType = {
    stateDialogs: DialogsPageType
    dispatch: (action: ActionType) => void
}

/*
export function DialogContainer() {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const OnchangeHandler = (title: string) => {
                    store.dispatch(updateNewDialogText_AC(title))
                }
                const onClickHandler = () => {
                    store.dispatch(addDialog_AC());
                }


                return <div className={classes.sign}>
                    <div className={s.messages}>
                        <div className={s.item}>
                            <Message stateMessage = {store.getState().dialogsPage.messages}/>
                        </div>
                        <div className={s.dialog}>
                            <Dialog stateDialogs={store.getState().dialogsPage.dialogs}
                                    onClickHandler={onClickHandler}
                                    OnchangeHandler={OnchangeHandler}
                                    value={store.getState().dialogsPage.newDialogText}
                            />

                        </div>
                    </div>
                </div>


            }}
        </StoreContext.Consumer>

            )
            }


*/


let mapStateToProps = (state: StateType) => {
    console.log(state)
    return {
        stateDialogs: state.dialogsPage.dialogs,
        stateMessage: state.dialogsPage.messages,
        value: state.dialogsPage.newDialogText
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
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


