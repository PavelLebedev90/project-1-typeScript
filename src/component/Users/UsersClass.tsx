import React from 'react';
import classes from '../SignUp/SignUp.module.css';
import userClass from './Users.module.css';
import s from '../Profile/MyPosts/Post/Post.module.css';
import axios from 'axios';
import {UserType} from '../../Redux/users-reducer';
import {MapDispatchType} from './UsersContainer';
import {findAllByDisplayValue} from '@testing-library/react';


const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaznFcbeSJTVKFzMptmjTuD6XEAkUuN7SxkA&usqp=CAU'

export type UsersAPIType = {
    followed: boolean
    id:number
    name:string
    photos:{
        small: null | string
        large: null | string
    }
    status: null | string
    uniqueUrlName: null | string
}

class UsersC extends React.Component<any, any>{

componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response =>{
            this.props.setUsers(response.data.items)
        })
}

    render() {
        console.log(this.props.state)
        return(
            <div className={classes.sign}>
                {
                    this.props.users.map((m: any) => {
                        return (
                            <div key={m.id} className={userClass.wrapper}>
                                <div className={userClass.ava}>
                                    <div className={s.item}>
                                        <img src={avatar} alt="avatar"/>
                                    </div>
                                    <div>
                                        {m.followed ? <button
                                                onClick={() => this.props.unFollow(m.id)}>{m.followed ? 'unFollowed' : 'followed'}</button>
                                            : <button
                                                onClick={() => this.props.follow(m.id)}>{m.followed ? 'unFollowed' : 'followed'}</button>}

                                    </div>
                                </div>
                                <div className={userClass.description}>
                                    <div>
                                        <div>{m.name}</div>
                                        <div>{m.status}</div>
                                    </div>
                                    <div>
                                        <div>{m.uniqueUrlName}</div>
                                        <div>m.location.city</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}



export default UsersC