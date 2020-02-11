import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    {/*:userId - params for withRouter // если есть ? то параметр не обязателен*/}
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/friends" component={Friends}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mstp = (state) => {
    return {
        initialized: state.app.initialized
    }
};
export default compose(
    connect(mstp, {initializeAppTC}),
    withRouter,
)(App);
