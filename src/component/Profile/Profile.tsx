import React, {Dispatch} from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import classes from "./../SignUp/SignUp.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType, ProfilePageType} from '../../Redux/State';
import MyPostsContainer from './MyPosts/MyPostsContainer';


type statePostsType = {
    statePosts: ProfilePageType
    dispatch: (action: ActionType)=>void
}

const Profile = () => {
    return (
        <div className={`${classes.sign} ${s.profile}`}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;