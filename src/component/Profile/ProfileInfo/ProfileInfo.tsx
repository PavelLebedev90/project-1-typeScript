import s from './ProfileInfo.module.css';
import React from 'react';
import {ProfileAPIType} from '../ProfileContainer';
import ProfileStatus from './ProfileStatus';
import {useDispatch} from 'react-redux';

type ProfileInfoType = {
    profile: ProfileAPIType[]
    status: string
}

export const ProfileInfo = (props: ProfileInfoType) => {
    let dispatch = useDispatch()

    return <div>
        <div>
            <ProfileStatus status={props.status} dispatch={dispatch}/>
        </div>
        {
            props.profile.map(m => {
                return (
                    <div key={m.userId}>
                        <div>
                            <img className={s.img} alt={'photo'}
                                 src={m.photos.large ? m.photos.large
                                     : 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'}/>
                        </div>
                        <div>
                            fullName:{m.fullName}
                        </div>
                        <div>
                            aboutMe:{m.aboutMe}

                        </div>
                        <div>
                            {m.contacts.vk}
                        </div>
                    </div>

                )

            })
        }
    </div>
}