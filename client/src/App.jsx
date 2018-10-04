import React, { Component } from 'react';
//RHL only for front end development
import SideBar from './components/sidebar.jsx';
import Chat from './components/chat.jsx';


class App extends Component {

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(location => {
        this.setState({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        })
      });
   }

  render() {

    return (
      <div className="container-fluid">
        <div className="rowNoFlex">    
          <Chat className='col-md-10'/>
          <SideBar className='col-md-2'/>
        </div>
      </div>
    );
  }
}

export default App;
