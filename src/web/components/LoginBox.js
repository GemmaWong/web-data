import React, {Component} from 'react';
import Login from './Login';

class LoginBox extends Component {
     constructor(...) {
          super(...);
     }

     render() {
          return (
               <div className="login-page-bg">
                    <Login/>
               </div>
     );
     }
}

export default LoginBox;