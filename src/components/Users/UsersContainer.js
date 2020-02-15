import React from 'react';
import {connect} from "react-redux";
import {
    followThunk,
    getUsersTC,
    setCurrentPageAC,
    toggleIsFollowingAC,
    unFollowThunk
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    followingInProgress,
    getCurrentPage, getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuperSelector,
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true);
        // if (this.props.users.length === 0) {
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalusersCount(data.totalCount);
        //     });
        // } else {
        //     this.props.toggleIsFetching(false);
        // }
    }

    onPageChanged = (number) => {
        this.props.getUsersTC(number, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        this.props.setCurrentPage(number);
        // usersAPI.getUsers(number, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
    };

    render() {
        return <>
            {
                this.props.isFetching ?
                    <Preloader/> :
                    <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           isFollowing={this.props.isFollowing}
                           follow={this.props.followThunk}
                           unfollow={this.props.unFollowThunk}
                    />
            }
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.followingInProgress
//     }
// };
let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        // users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: followingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        toggleFollowing: toggleIsFollowingAC,
        getUsersTC, followThunk, unFollowThunk
    }),
    // WithAuthRedirect
)(UsersContainer);

// export default WithAuthRedirect(connect(mapStateToProps, {
//     setCurrentPage: setCurrentPageAC,
//     toggleFollowing: toggleIsFollowingAC,
//     getUsers, followThunk, unFollowThunk
//
// })(UsersContainer));