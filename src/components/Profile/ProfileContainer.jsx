import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;// from withRouter
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile});

let WithRouterUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileThunk})(WithRouterUrlDataContainerComponent);