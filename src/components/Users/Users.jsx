import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import UsersOne from "./UsersOne";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        {
            users.map(u => <UsersOne key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow}/>)
        }
        {/*<Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}*/}
        {/*           pageSize={pageSize}/>*/}
    </div>

}

export default Users;