import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Redux/profile-reducer';



type statePostType = {
    statePost: Array<PostType>
    addPost: () => void
    value:string
    updateNewPostText: (title:string)=>void
}


const MyPosts = (props: statePostType) => {

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewPostText(e.currentTarget.value)
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