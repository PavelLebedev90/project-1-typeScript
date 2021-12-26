import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPost_AC, updateNewPostText_AC} from '../../../Redux/profile-reducer';
import {ActionType, PostType} from '../../../Redux/State';


type statePostType = {
    statePost: Array<PostType>
 /*   addTask: () => void
    UpdateNewPostText: (newPost:string)=>void*/
    dispatch: (action: ActionType)=>void
}



const MyPosts = (props: statePostType) => {

const refText = React.createRef<HTMLTextAreaElement>();
 /*   const [textAreaValue, setTextAreaValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.currentTarget.value);
    }*/
    const addPostHandler = () => {
      if(refText.current){
          props.dispatch(updateNewPostText_AC(refText.current.value))
          props.dispatch(addPost_AC());
          refText.current.value = "";
      }
    }

    return (
        <div>
            My posts
            <div className={s.posts}>
                <textarea ref = {refText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div>
                <Post post={props.statePost}/>

            </div>
        </div>
    )
}

export default MyPosts;