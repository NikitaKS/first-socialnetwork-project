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


class App extends React.Component {
    render = () => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={()=> <Dialogs state={this.props.state.message}/> }/>
                        <Route path="/news" component={News}/>
                        <Route path="/profile" render={()=> <Profile state={this.props.state.profile} /> }/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
