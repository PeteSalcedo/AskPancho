import React, { Component } from "react";
import Status from './status.jsx';
import ChangePicture from './changePicture.jsx';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class Settings extends Component {
  getNewPhoto(){
    //pick user phot from device
    //pick user photo from some photoURL

    //return value should be some url
  }
updateProfile(){
  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: user,
  // firebase.auth().currentUser.photoURL  getNewPhoto()
}).then(function() {
  // Update successful.
}).catch(function(error) {

});
}
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Settings;
