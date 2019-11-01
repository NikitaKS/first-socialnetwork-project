import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";


class App extends React.Component {
    render = () => {
        return (
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <Profile />
            </div>
        );
    }
}

export default App;
