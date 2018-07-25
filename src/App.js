import React, { Component } from 'react'
import './App.css'
import logo from './icons/funnel.svg'
import MapContainer from './components/Map.js'

class App extends Component {
  toggleSidebar() {

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <aside className="sidebar">
            <h1>DineOBath<br />Find Restaurants in Bath</h1>
            <button id="hamburger-icon" onClick={this.toggleSidebar}>&#9776</button>
            <div className="filtering">
              <input id="search" type="text" placeholder="  e.g. Pizza, Breakfast, Wine..." aria-label="Search Restaurants" />
              <button><img src={logo} alt="funnel" width="16px" height="16px" /> Filter</button>
            </div>
            <ul className="restaurant-list">
              <li>Restaurant 1</li>
              <li>Restaurant 2</li>
              <li>Restaurant 3</li>
            </ul>
            <p>> This app uses foursquare places and google maps api</p>
          </aside>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
