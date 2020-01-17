import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;// from withRouter
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunk(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />;
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithRouterUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileThunk})(WithRouterUrlDataContainerComponent);