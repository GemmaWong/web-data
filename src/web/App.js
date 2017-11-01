import React, { Component } from 'react';
import './style/App.scss';
import LoginBox from './components/LoginBox';

class App extends Component {
    render() {
        return (
            <div>
                <LoginBox/>
            </div>
        );
    }
}

export default App;