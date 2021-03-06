import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, getUserStatusTC, updateStatusTC} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;// from withRouter
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.history.push('/login');
        }
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatusTC}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getUserStatus: getUserStatusTC, updateStatusTC}), // 3
    withRouter, // 2
    // WithAuthRedirect // 1
)(ProfileContainer);

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
//
// //     (props) => {
// //     if (!this.props.isAuth) return <Redirect to={'/login'}/>;
// //     return <ProfileContainer {...props} />
// // };
//
// let WithRouterUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfileThunk})(WithRouterUrlDataContainerComponent);