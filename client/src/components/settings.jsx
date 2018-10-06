import React, { Component } from "react";
// import Status from './status.jsx';
// import ChangePicture from './changePicture.jsx';
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Modal from 'react-responsive-modal';

class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.onOpenModal}>Settings</button>
        <Modal open={open} onClose={this.onCloseModal} center>
     <h1>Hello a little modal</h1>
        </Modal>
      </div>
    )}
}


export default Settings;



// class Settings extends Component {
//   getNewPhoto(){
//     //pick user phot from device
//     //pick user photo from some photoURL
//
//     //return value should be some url
//   }
//
// updateProfile(){
//   var user = firebase.auth().currentUser;
//
// user.updateProfile({
//   displayName: user,
//   // firebase.auth().currentUser.photoURL  getNewPhoto()
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//
// });
// }
//   render() {
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }
//
// export default Settings;
