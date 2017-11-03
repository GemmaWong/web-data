import React, {Component} from 'react';

class WebData extends React.Component {
    render() {
        return (
            <div className="web-data">
              <div className="left fl">left</div >

              <div className="right fl">
                   <div id="box">
                        <div className="move-left fl" id="moveLeft">

                        </div>

                        <div className="move-right fr" id="moveRight">
                             move-right
                        </div>
                        <div id="line"></div>
                   </div>
              </div >

            </div >
        );
    }
}
export default WebData;