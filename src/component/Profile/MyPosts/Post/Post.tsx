import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../Redux/State";

type PostPropsType = {
    post: Array<PostType>
}

const Post = (props: PostPropsType) => {

    return (
        <div className={s.item}>
            {
                props.post.map(m => (<div key={m.id}>
                        <img
                            src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/62/62d546ccdfc4a838b2e0d622b1b292bfa2af90ec_full.jpg'/>
                        {m.message}
                        <div>
                            <span>like {m.likesCount}</span>
                        </div>
                    </div>
                ))

            }


        </div>
    )
}

export default Post;