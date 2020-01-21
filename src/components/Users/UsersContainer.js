import React from 'react';
import {connect} from "react-redux";
import {followThunk, getUsers, setCurrentPageAC, toggleIsFollowingAC, unFollowThunk} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthReirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
        this.props.getUsers(number, this.props.pageSize);
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

export default compose(
    connect(mapStateToProps, {
        setCurrentPage: setCurrentPageAC,
        toggleFollowing: toggleIsFollowingAC,
        getUsers, followThunk, unFollowThunk

    }),
    WithAuthRedirect
)(UsersContainer);

// export default WithAuthRedirect(connect(mapStateToProps, {
//     setCurrentPage: setCurrentPageAC,
//     toggleFollowing: toggleIsFollowingAC,
//     getUsers, followThunk, unFollowThunk
//
// })(UsersContainer));