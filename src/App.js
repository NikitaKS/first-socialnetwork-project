import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                    {/*:userId - params for withRouter // если есть ? то параметр не обязателен*/}
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/friends" component={Friends}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
