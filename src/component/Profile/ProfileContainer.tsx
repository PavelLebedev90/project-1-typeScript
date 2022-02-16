import React, {useEffect} from 'react';
import Profile from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {getUserStatusThunk, setUserProfileThunk} from '../../Redux/profile-reducer';
import {useNavigate, useParams} from 'react-router-dom';


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
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const status = useSelector<AppStateType, string>(state => state.profilePage.status)
    let {userId} = useParams();
    const redirect = useNavigate()

    let id = userId

    useEffect(() => {
        if (!id) id = '21570'
        dispatch(setUserProfileThunk(id))
        dispatch(getUserStatusThunk(id))

    }, [userId])

    useEffect(() => {
        if (!isAuth) {
            redirect('/sign_up')
        }
    }, [])


    return (
        <div>
            <Profile profile={profile} status={status}/>
        </div>
    );
};

export default ProfileContainer;
