import React, { Component } from 'react'
import './App.css'
import RestaurantList from './components/RestaurantList'
import MapContainer from './components/Map'
import * as PlacesAPI from './components/PlacesAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class App extends Component {
  state = {
    places: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
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

    let showingPlaces;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingPlaces = this.state.places.filter(venue => match.test(venue.name));
    } else {
      showingPlaces = this.state.places;
    }
    showingPlaces.sort(sortBy('name'));

    return (
      <div className="App">
        <div className="container">
          <aside className="sidebar">
            <h1>Eat'nDrink<br />Find Cafes in Bath</h1>
            <button id="hamburger-icon" onClick={this.toggleSidebar}>&#9776</button>
            <div className="filtering">
              <input
                id="search"
                type="text"
                placeholder="  e.g. Pizza, Breakfast, Wine..."
                aria-label="Search Cafes"
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
            <RestaurantList places={showingPlaces} />
            <p>> This app uses foursquare places and google maps api</p>
          </aside>
          <MapContainer
            places={showingPlaces}
            />
        </div>
      </div>
    );
  }
}

export default App;
