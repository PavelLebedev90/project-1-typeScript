import React, {Dispatch} from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import classes from "./../SignUp/SignUp.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from '../../Redux/State';


type statePostsType = {
    statePosts: Array<PostType>
/*    addTask: () => void
    UpdateNewPostText: (newPost:string)=>void*/
    dispatch: (action: ActionType)=>void
}

const Profile = (props: statePostsType) => {
    return (
        <div className={`${classes.sign} ${s.profile}`}>
            <ProfileInfo/>
            <MyPosts statePost = {props.statePosts}
                   /*  addTask = {props.addTask}
                     UpdateNewPostText={props.UpdateNewPostText}*/
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;