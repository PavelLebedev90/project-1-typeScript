import React, {useEffect} from 'react';

import axios from 'axios';
import Profile from './Profile';
import {connect, useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {ProfilePageType, setUserProfile} from '../../Redux/profile-reducer';
import {useParams} from 'react-router-dom';


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
type MapDispatchType = {
    setUserProfile: (profile: ProfileAPIType) => void
}
// class ProfileContainer extends React.Component<MapDispatchType & ProfilePageType> {
//     componentDidMount() {
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
//             .then(response => {
//                 console.log(response.data)
//                 this.props.setUserProfile(response.data)
//
//             })
//     }
//
//     render() {
//         return (
//             <><Profile profile={this.props.profile}/>
//                 <ProfileContainer1/></>
//         )
//     }
// }
//
// let mapStateToProps = (state: AppStateType) => {
//     return {
//         profile: state.profilePage.profile,
//         posts: state.profilePage.posts,
//         newPostText:state.profilePage.newPostText
//     }
// }
//
// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);


const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profile = useSelector<AppStateType, ProfileAPIType[]>(state => state.profilePage.profile)
    let {userId} = useParams();

   let id = userId

    useEffect(() => {
        if(!id) id = '2'
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                dispatch(setUserProfile(response.data))

            })
    }, [userId])

    return (
        <div>
            <Profile profile={profile}/>
        </div>
    );
};

export default ProfileContainer;