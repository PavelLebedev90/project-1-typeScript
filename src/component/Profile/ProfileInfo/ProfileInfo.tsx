import s from './ProfileInfo.module.css';
import React from 'react';
import {ProfileAPIType} from '../ProfileContainer';

type ProfileInfoType = {
    profile: ProfileAPIType[]
}

export const ProfileInfo = (props: ProfileInfoType) => {


    return <div>  {
        props.profile.map(m => {
            return (
                <>
                    <div>
                        <img className={s.img}
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

                </>

            )

        })
    }
    </div>
}