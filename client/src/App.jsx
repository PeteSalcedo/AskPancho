
import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
apiKey: "AIzaSyB98qiRdWSgLuxVWPdfJSxJeO7luYrP7ZQ",
authDomain: "holapancho-3bcee.firebaseapp.com"
});

class App extends Component {
 constructor(props){
   super(props)
   this.state = {
     isSignedIn: false
   }
 }


componentDidMount() {
  navigator.geolocation.getCurrentPosition(location => {
    this.setState({
      lat: location.coords.latitude,
      lon: location.coords.longitude
    })
  });

 firebase.auth().onAuthStateChanged(user => {
   this.setState({isSignedIn : !!user});
   console.log("user", user);
 });
}

render(){

 var uiConfig = {
   signInFlow: "popup",
   signInOptions: [

     firebase.auth.GithubAuthProvider.PROVIDER_ID,

   ],
   callbacks: {
     signInSuccess: () => false
   }
 };
 return (
   <div>
   {this.state.isSignedIn ?(
     <span>
     <div>Signed In!</div>
     <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
     <h1>Welcome{firebase.auth().currentUser.displayName}</h1>
     <img
     alt="profile picture"
     src={firebase.auth().currentUser.photoURL}
     />
     <div className="rowNoFlex">
       <Chat className='col-md-10'/>
       <SideBar className='col-md-2'/>
     </div>
     </span>
   ) : (
     <StyledFirebaseAuth
     uiConfig={uiConfig}
     firebaseAuth={firebase.auth()}
     />
   )}
   </div>
 );
}
}
export default App;
