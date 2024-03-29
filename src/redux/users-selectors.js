import {createSelector} from 'reselect';

 const requestUsersSelector = (state)=>{
    return state.usersPage.users;
}

export const requestUsers = createSelector(requestUsersSelector, (users)=>{
    users.filter(u=>true)
} )


export const getPageSize = (state)=>{
    return state.usersPage.users;
}

export const getTotalUsersCount = (state)=>{
    return state.usersPage.totalUsersCount;
}


export const getCurrentPage = (state)=>{
    return state.usersPage.currentPage;
}

export const getIsFetching = (state)=>{
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state)=>{
    return state.usersPage.followingInProgress;
}

