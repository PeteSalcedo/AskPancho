import React, { Component } from "react";
import Status from './status.jsx';
import ChangePicture from './changePicture.jsx';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"; 

class Settings extends Component {

  render() {
    return (
      <div>
        var user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
      </div>
    )
  }
}

export default Settings;
