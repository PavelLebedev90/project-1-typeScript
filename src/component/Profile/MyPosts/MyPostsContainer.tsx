import React from 'react';
import { addPost} from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';






let mapStateToProps = (state:AppStateType)=>{
    return {
        statePost: state.profilePage.posts,
    }
}



const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)
export default MyPostsContainer;
