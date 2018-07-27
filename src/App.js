import React, { Component } from 'react'
import './App.css'
import RestaurantList from './components/RestaurantList'
import MapContainer from './components/Map'
import * as PlacesAPI from './components/PlacesAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import HamburgerMenu from 'react-hamburger-menu' // https://github.com/cameronbourke/react-hamburger-menu

class App extends Component {
  state = {
    places: [],
    query: '',
    isOpen: false
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidMount() {
    PlacesAPI.getAll().then(places => {
      this.setState({ places: places.response.venues })
    });
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
          <aside className={this.state.isOpen ? "sidebar active" : "sidebar"}>
            <h1>Eat'nDrink<br />Find Cafes in Bath</h1>
            <div className="hamburger-menu">
              <HamburgerMenu
                isOpen={this.state.isOpen}
                menuClicked={this.handleClick}
                width={27}
                height={22}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>
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
          <div id='map' className={this.state.isOpen ? "active" : null}>
            <MapContainer
              places={showingPlaces}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
