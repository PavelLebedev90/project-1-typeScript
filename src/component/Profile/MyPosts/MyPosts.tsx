import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Redux/profile-reducer';
import {MyPostFormContainer, MyPostFormType} from './MyPostForm';
import {reset, ResetAction} from 'redux-form';


type statePostType = {
    statePost: Array<PostType>
    addPost: (data: MyPostFormType) => void
}


const MyPosts = (props: statePostType) => {

    const onSubmitNewPostText = (data: MyPostFormType) => {
        props.addPost(data)
    }

    return (
        <div>
            My posts
            <div className={s.posts}>
                <MyPostFormContainer onSubmit={onSubmitNewPostText}/>
            </div>
            <div>
                <Post post={props.statePost}/>

            </div>
        </div>
    )
}
export default MyPosts;

