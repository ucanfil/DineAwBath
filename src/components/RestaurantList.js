import React, { Component } from 'react'

class RestaurantList extends Component {

  render() {
    return (
      <div className="restaurant-list">
        {this.props.children}
      </div>
    )
  }
}

export default RestaurantList