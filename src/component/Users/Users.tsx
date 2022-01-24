import classes from './../SignUp/SignUp.module.css';
import {UsersType, UserType} from '../../Redux/users-reducer';
import {zeleboba} from '../Profile/MyPosts/Post/Post';
import s from '../Profile/MyPosts/Post/Post.module.css';
import userClass from './Users.module.css'
import {v1} from 'uuid';
import {log} from 'util';
type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

function Users(props: UsersPropsType) {
if(props.users.length === 0){
    props.setUsers([
        {id: v1(), userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaznFcbeSJTVKFzMptmjTuD6XEAkUuN7SxkA&usqp=CAU', followed: false, fullname: 'Roma', status: 'Hi, how are you?', location:{city: 'Moscow', country: 'Russia'}},
        {id: v1(), userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaznFcbeSJTVKFzMptmjTuD6XEAkUuN7SxkA&usqp=CAU',followed: true, fullname: 'Kostya', status: 'It\'s my first post', location:{city: 'Tver', country: 'Russia'}},
        {id: v1(), userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaznFcbeSJTVKFzMptmjTuD6XEAkUuN7SxkA&usqp=CAU', followed: false, fullname: 'Misha',status: 'What are you doing maaaaaan?', location: {city: 'Tver', country: 'Russia'}},
    ])
}

    return (
        <div className={classes.sign}>
            {
                props.users.map(m => {
                    function onClickFollow() {
                        m.followed ? props.unFollow(m.id) : props.follow(m.id)
                    }

                    return (
                        <div key={m.id} className={userClass.wrapper}>
                            <div className={userClass.ava}>
                                <div className={s.item}>
                                    <img src={m.userPhoto} alt="avatar"/>
                                </div>
                                <div>
                                    <button
                                        onClick={onClickFollow}>{m.followed ? 'unFollowed' : 'followed'}</button>
                                </div>
                            </div>
                            <div className={userClass.description}>
                                <div>
                                    <div>{m.fullname}</div>
                                    <div>{m.status}</div>
                                </div>
                                <div>
                                    <div>{m.location.country}</div>
                                    <div>{m.location.city}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;