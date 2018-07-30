import React, { Component } from 'react'
import './App.css'
import RestaurantList from './components/RestaurantList'
import Category from './components/Category'
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
              places={showingPlaces}
            >
              <Category
                title="Tea Rooms"
              >
                <ul className="cafe-list">
                  {showingPlaces.filter(venue => {
                    let match = new RegExp(/\btea\b/, 'i')
                    return match.test(venue.name) ? venue.name : ''
                  }).map(venue =>
                    <li
                      onClick={() => this.handleToggleModal(venue)}
                      key={venue.id}>
                      <a>{venue.name}</a>
                    </li>)}
                </ul>
              </Category>
              <Category
                title="Coffee Shops"
              >
                <ul className="cafe-list">
                  {showingPlaces.filter(venue => {
                    let match = new RegExp(/\bcoffee\b/, 'i')
                    return match.test(venue.name) ? venue.name : ''
                  }).map(venue =>
                    <li
                      onClick={() => this.handleToggleModal(venue)}
                      key={venue.id}>
                      <a>{venue.name}</a>
                    </li>)}
                </ul>
              </Category>
            </RestaurantList>
            <p>> This app uses foursquare places and google maps api</p>
          </aside>
          <div id='map' className={this.state.isSidebarOpen ? "active" : null}>
            <MapContainer
              onOpenModal={this.handleToggleModal}
              places={showingPlaces.filter(venue => {
                let match = new RegExp(/\bcoffee\b|\btea\b/, 'i')
                return match.test(venue.name) ? venue.name : ''
              })}
              />
          </div>
          {this.state.showModal ? (
            <Modal
              onClose={this.handleCloseModal}
              venue={this.state.venue}>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
