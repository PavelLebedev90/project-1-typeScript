import React from 'react';
import s from './Profile.module.css';
import classes from './../SignUp/SignUp.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileAPIType} from './ProfileContainer';

type ProfileType = {
    profile:ProfileAPIType[]
    status:string
}

const Profile = (props:ProfileType) => {
    return (
        <div className={`${classes.sign} ${s.profile}`}>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;