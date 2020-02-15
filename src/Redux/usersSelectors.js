import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}; // simple selector

export const getUsersSuperSelector = createSelector(getUsers,(users) => {
   return users.filter(u => true)
}); // difficult selector

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};