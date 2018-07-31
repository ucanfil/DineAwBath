import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Category extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className={this.props.title} aria-label="Cafe Categories">
        <h2 id="categoryheader">{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Category