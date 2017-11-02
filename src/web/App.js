import React, { Component } from 'react';
import './style/App.scss';
import LoginBox from './components/LoginBox';
import UserPage from './components/UserPage'

class App extends Component {
    render() {
        return (
            <div>
                <LoginBox/>
                <UserPage/>
            </div>
        );
    }
}

export default App;