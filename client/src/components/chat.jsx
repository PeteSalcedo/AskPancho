import React, { Component } from "react";
import Picture from './picture.jsx';

class Chat extends Component {

  render() {
    return (
      <div className="col-md-10">
        <div className= "col-md-4">
          <div className= "row">
            <center>
              <Picture />
            </center>
          </div>
        </div>
        <div className="col-md-8">
        </div>
      </div>
    )
  }
}

export default Chat;
