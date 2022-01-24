import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import userClass from '../Users.module.css';
import s from '../../Profile/MyPosts/Post/Post.module.css';
import {avatar, UsersAPIType} from '../UsersContainer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {follow} from '../../../Redux/users-reducer';
import {changeFollowedUser, changeUnFollowedUser} from '../../../api/api';


type ItemsType = {
    currentItems: UsersAPIType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    isFetching: boolean
    folowInProgress: number[]
    setFollowProgress: (isFetching: boolean, id:number) => void
}
type PaginatedItemsType = {
    itemsPerPage: number
    users: UsersAPIType[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    currentPageChanged: (page: number) => void
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    folowInProgress: number[]
    setFollowProgress: (isFetching: boolean, id:number) => void
}

function Items({currentItems, ...props}: ItemsType) {

    let ItemsClass = props.isFetching ? userClass.ItemsPreload : '';
    console.log('Items is mound')

    const changeFollowed = (id: number, followed: boolean) => {
       if(followed){
           props.setFollowProgress(true, id)
           changeUnFollowedUser(id)
               .then(data => {
                   if (data.resultCode === 0) {
                       props.follow(id)
                   }
                   props.setFollowProgress(false, id)
               })
       }else{
           props.setFollowProgress(true, id)
           changeFollowedUser(id)
               .then(data => {
                   if (data.resultCode === 0) {
                       props.unFollow(id)
                   }
                   props.setFollowProgress(false, id)

               })
       }
    }
    return (
        <>
            {currentItems &&
            currentItems.map((m) => (
                <div key={m.id} className={`${userClass.wrapper} ${ItemsClass}`}>
                    <div className={userClass.ava}>
                        <div className={s.item}>
                            <NavLink to={'/profile/' + m.id}><img src={m.photos.large ? m.photos.large :
                                m.photos.small ? m.photos.small : avatar} alt="avatar"/>
                            </NavLink>
                        </div>

                        <div>

                            <button disabled={props.folowInProgress.some(id=>id===m.id)}
                                onClick={() => changeFollowed(m.id, m.followed)}>{m.followed ? 'unFollow' : 'follow'}</button>


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
            ))}
        </>
    );
}

export function PaginatedItems({itemsPerPage, ...props}: PaginatedItemsType) {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];
    for (let p = 1; p <= pageCount; p++) {
        pages.push(p)
    }

    const [currentItems, setCurrentItems] = useState<null | Array<number>>(null);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(pages.slice(itemOffset, endOffset));
        // setPageCount(Math.ceil(pages.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);


    const handlePageClick = (event: any) => {

        const newOffset = (event.selected * itemsPerPage) % pages.length;
        props.currentPageChanged(newOffset)
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={props.users} unFollow={props.unFollow} follow={props.follow}
                   isFetching={props.isFetching}
                   folowInProgress={props.folowInProgress}
                   setFollowProgress={props.setFollowProgress}

            />
            <ReactPaginate
                className={'paginate'}
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={() => null}
            />
        </>
    );
}


