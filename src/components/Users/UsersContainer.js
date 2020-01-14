import React from 'react';
import {connect} from "react-redux";
import {
    follow, setCurrentPageAC, setTotalusersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC
}
    from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true
                }
            ).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalusersCount(response.data.totalCount);
            });
        } else {
            this.props.toggleIsFetching(false);
        }
    }

    onPageChanged = (number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            }
        ).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }

};

export default connect(mapStateToProps, {
    follow,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalusersCount: setTotalusersCountAC,
    toggleIsFetching: toggleIsFetchingAC,

})(UsersContainer);