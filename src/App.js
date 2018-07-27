import React, { Component } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MapContainer from './components/Map'
import * as PlacesAPI from './components/PlacesAPI'

class App extends Component {
  state = {
    places: []
  }

  componentDidMount() {
    PlacesAPI.getAll().then(places => {
      this.setState( {places: places.response.venues} )
    });
  }

  toggleSidebar() {

  }

  render() {
    console.log(this.state.places);
    return (
      <div className="App">
        <div className="container">
          <Sidebar places={this.state.places}/>
          <MapContainer
            places={this.state.places}
            />
        </div>
      </div>
    );
  }
}

export default App;
