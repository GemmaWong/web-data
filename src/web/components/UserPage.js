import React, {Component} from 'react';
import Header from './Header';
import WebData from './WebData'

class UserPage extends Component {
    render() {
        return (
            <div className="user-page" >
                <Header/>
                <WebData/>
            </div>
        );
    }
}

export default UserPage;