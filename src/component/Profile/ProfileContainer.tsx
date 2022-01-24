import React, {useEffect} from 'react';

import axios from 'axios';
import Profile from './Profile';
import {connect, useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {ProfilePageType, setUserProfile} from '../../Redux/profile-reducer';
import {useParams} from 'react-router-dom';
import {getUserProfile} from '../../api/api';


export type ProfileAPIType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: null | string
        twitter: string
        vk: string
        website: null | string
        youtube: null | string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number
}




const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfileAPIType[]>(state => state.profilePage.profile)
    let {userId} = useParams();

   let id = userId

    useEffect(() => {
        if(!id) id = '21570'
        getUserProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))

            })
    }, [userId])

    return (
        <div>
            <Profile profile={profile}/>
        </div>
    );
};

export default ProfileContainer;