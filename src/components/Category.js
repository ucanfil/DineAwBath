import React, { Component } from 'react'

class Category extends Component {
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