import React, {Component} from 'react';

class Login extends React.Component {
     render() {
          return (
               < div className = "login-box" >
                    < div className = "login-title" > 登录 < / div >
                    < div className = "login-line" >
                         < div className = "left-box" > 用户名 < / div >
                         < input className = "right-box" type="text" / >
                    < / div >
                    < div className = "login-line" >
                         < div className = "left-box" > 密码 < / div >
                         < input className = "right-box" type="password" / >
                    < / div >
                    < input className = "login-button"  type="button" value="登录"/ >
               < / div >
          );
     }
}
export default Login;