import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";


class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={() => <Dialogs state={this.props.state.message} dispatch={this.props.dispatch}/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/profile" render={() => <Profile
                            profilePage={this.props.state.profile}
                            dispatch={this.props.dispatch}/>}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/friends" component={Friends}/>
                    </div>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;
