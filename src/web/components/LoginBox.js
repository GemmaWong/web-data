import React, {Component} from 'react';
import Login from './Login';

class LoginBox extends Component {
    render() {
        return (
            <div className="login-page-bg">
                <Login/>
            </div>
        );
    }
}

export default LoginBox;