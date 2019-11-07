import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


class App extends React.Component {
    render = () => {
        return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Dialogs/>
                </div>
                {/*<Profile />*/}
            </div>
        );
    }
}

export default App;
