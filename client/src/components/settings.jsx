import React, { Component } from "react";
import Status from './status.jsx';
import ChangePicture from './changePicture.jsx';

class Settings extends Component {

  render() {
    return (
      <div>
        <Status />
        <ChangePicture />
      </div>
    )
  }
}

export default Settings;
