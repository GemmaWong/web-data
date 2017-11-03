import React, {Component} from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
              <div className="icon-text home-icon fl">系统名称</div >
              <div className="icon-text exit-icon fr">退出</div >
              <div className="icon-text site-icon fr">设置</div >
              <div className="icon-text identity-icon fr">管理员</div >
            </div >
        );
    }
}
export default Header;