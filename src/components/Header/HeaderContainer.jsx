import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutTC} from "../../Redux/authReducer";

class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {logOutTC})(HeaderContainer);