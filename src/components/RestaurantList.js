import React, { Component } from 'react'
import Category from './Category'

class RestaurantList extends Component {

  render() {

    return (
      <div className="restaurant-list">
        <Category
          title="Tea Rooms"
          >
            <ul className="restaurant-list">
              {this.props.places.filter(venue => {
                let match = new RegExp(/\btea\b/, 'i')
                return match.test(venue.name) ? venue.name : ''
                  }).map(venue =>
                    <li
                      onClick={() => this.props.onOpenModal(venue)}
                      key={venue.id}>
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
    )
  }
}

export default RestaurantList