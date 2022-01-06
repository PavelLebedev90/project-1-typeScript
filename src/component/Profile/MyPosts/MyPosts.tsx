import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost_AC, updateNewPostText_AC} from '../../../Redux/profile-reducer';
import {ActionType, PostType} from '../../../Redux/State';


type statePostType = {
    statePost: Array<PostType>
    addPost: () => void
    value:string
    OnchangeHandler: (title:string)=>void
}


const MyPosts = (props: statePostType) => {

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
      props.OnchangeHandler(e.currentTarget.value)
    }

    const addPostHandler = () => {
            props.addPost();
    }

    return (
        <div>
            My posts
            <div className={s.posts}>
                <textarea onChange={onChange} value={props.value}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div>
                <Post post={props.statePost}/>

            </div>
        </div>
    )
}

export default MyPosts;