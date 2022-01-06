import React from 'react';
import {ActionProfileType, addPost_AC, updateNewPostText_AC} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';



export type dispatchPostsType = (action: ActionProfileType) => void



let mapStateToProps = (state:AppStateType)=>{
    return {
        statePost: state.profilePage.posts,
        value: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: dispatchPostsType)=>{
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