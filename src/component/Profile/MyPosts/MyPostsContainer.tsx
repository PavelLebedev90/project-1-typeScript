import React from 'react';
import {ActionProfileType, addPost, updateNewPostText} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';






let mapStateToProps = (state:AppStateType)=>{
    return {
        statePost: state.profilePage.posts,
        value: state.profilePage.newPostText
    }
}



const MyPostsContainer = connect(mapStateToProps, {addPost,updateNewPostText})(MyPosts)
export default MyPostsContainer;