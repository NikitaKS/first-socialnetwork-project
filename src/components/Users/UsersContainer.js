import React from 'react';
import {connect} from "react-redux";
import {
    follow, setCurrentPageAC, setTotalusersCountAC, setUsersAC, toggleIsFetchingAC, toggleIsFollowingAC, unfollowAC
}
    from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {userAPI as usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalusersCount(data.totalCount);
            });
        } else {
            this.props.toggleIsFetching(false);
        }
    }

    onPageChanged = (number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(number);
        usersAPI.getUsers(number, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
                           toggleFollowing={this.props.toggleFollowing}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                    />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.followingInProgress
    }

};

export default connect(mapStateToProps, {
    follow,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalusersCount: setTotalusersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowing: toggleIsFollowingAC

})(UsersContainer);