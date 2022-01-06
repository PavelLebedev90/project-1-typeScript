import React from 'react';
import {addPost_AC, updateNewPostText_AC} from '../../../Redux/profile-reducer';
import {ActionType, ProfilePageType, StateType} from '../../../Redux/State';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


type statePostType = {
    statePost: ProfilePageType
    dispatch: (action: ActionType) => void
}
export type dispatchType = (action: ActionType) => void



/*
const MyPostsContainer = () => {


    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => {
                        store.dispatch(addPost_AC());
                    }
                    const OnchangeHandler = (title:string) => {
                        if(title.trim()){
                            store.dispatch(updateNewPostText_AC(title))
                        }

                    }
                   return <MyPosts addPost={addPost}
                             statePost={store.getState().profilePage.posts}
                             value={store.getState().profilePage.newPostText}
                             OnchangeHandler={OnchangeHandler}
                    />
                }
            }

        </StoreContext.Consumer>

    );
}
*/

let mapStateToProps = (state:StateType)=>{
    return {
        statePost: state.profilePage.posts,
        value: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: dispatchType)=>{
    return {
        addPost: ()=>{dispatch(addPost_AC());},
        OnchangeHandler: (title:string)=>{
            if(title.trim()){
                dispatch(updateNewPostText_AC(title))
            }
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;