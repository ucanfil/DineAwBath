import React, { Component } from 'react'
import Category from './Category'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Sidebar extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  render() {
    let showingPlaces;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingPlaces = this.props.places.filter(venue => match.test(venue.name));
    } else {
      showingPlaces = this.props.places;
    }
    showingPlaces.sort(sortBy('name'))
    return (
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
        <div className="restaurant-list">
          <Category
            title="Tea Rooms"
            >
              <ul className="restaurant-list">
                {showingPlaces.filter(venue => {
                  let match = new RegExp(/\btea\b/, 'i')
                  return match.test(venue.name) ? venue.name : ''
                    }).map(venue =>
                      <li key={venue.id}>
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
                <li key={venue.id}>
                  <a>{venue.name}</a>
                </li>)}
            </ul>
          </Category>
        </div>
        <p>> This app uses foursquare places and google maps api</p>
      </aside>
    )
  }
}

export default Sidebar