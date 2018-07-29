import React, { Component } from 'react'
import './App.css'
import RestaurantList from './components/RestaurantList'
import MapContainer from './components/Map'
import * as PlacesAPI from './components/PlacesAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import HamburgerMenu from 'react-hamburger-menu' // https://github.com/cameronbourke/react-hamburger-menu
import Modal from './components/Modal'

class App extends Component {
  state = {
    places: [],
    query: '',
    isSidebarOpen: false,
    showModal: false,
    venue: {},
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  handleClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  componentDidMount() {
    PlacesAPI.getAll().then(places => {
      this.setState({ places: places.response.venues })
    });
  }

  handleToggleModal = (venue) => {
    this.setState({
      venue: venue,
      showModal: true,
    })
  }

  handleCloseModal = () => this.setState({ showModal: false })

  render() {

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
          <aside className={this.state.isSidebarOpen ? "sidebar active" : "sidebar"}>
            <h1>Eat'nDrink<br />Find Cafes in Bath</h1>
            <div className="hamburger-menu">
              <HamburgerMenu
                isOpen={this.state.isSidebarOpen}
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
                placeholder="  Filter Cafes: e.g. Tea Room, Coffee..."
                aria-label="Search Cafes"
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
            <RestaurantList
              onOpenModal={this.handleToggleModal}
              places={showingPlaces} />
            <p>> This app uses foursquare places and google maps api</p>
          </aside>
          <div id='map' className={this.state.isSidebarOpen ? "active" : null}>
            <MapContainer
              onOpenModal={this.handleToggleModal}
              places={showingPlaces}
              />
          </div>
          {this.state.showModal ? (
            <Modal
              onClose={this.handleCloseModal}>
              {this.state.venue.name}
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
