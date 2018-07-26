import React, { Component } from 'react'
import logo from '../icons/funnel.svg'
import Category from './Category'

class Sidebar extends Component {
  state = {
    query: ''
  }

  render() {
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
             />
          <button><img src={logo} alt="funnel" width="16px" height="16px" /> Filter</button>
        </div>
        <div className="restaurant-list">
          <Category
            title="Tea Rooms"
            >
              <ul className="restaurant-list">
                {this.props.places.filter(venue => {
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
              {this.props.places.filter(venue => {
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