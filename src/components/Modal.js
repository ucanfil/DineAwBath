import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as PlacesAPI from './PlacesAPI'

// Portal example seen from Kent C. Dodds >> https://codesandbox.io/s/00254q4n6p

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {
    venueDetails: {},
  }

  componentWillMount() {
    PlacesAPI.getVenueDetails(this.props.venue.id)
      .then(venue => {
        this.setState({ venueDetails: venue.response.venue })
      });
  }

  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 9999
        }}
        onClick={this.props.onClose}
      >
        <div
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '300px',
            margin: '1rem',
            position: 'relative',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
            zIndex: 10000,
          }}
        >
          <h2>{this.state.venueDetails.name}</h2>
          <div className="modal-info">
            <img
              src={this.state.venueDetails.bestPhoto ? this.state.venueDetails.bestPhoto.prefix + 300 + this.state.venueDetails.bestPhoto.suffix : "No info provided by foursquare"}
              alt={this.state.venueDetails.name}
            />
            <div className="venue-details">
              <span className="highlighted">Open Now:</span><span>{this.state.venueDetails.hours ? this.state.venueDetails.hours.isOpen ? "Yes" : "No" : "No info provided by foursquare"}</span>
              <span className="highlighted">Address:</span><span>{this.state.venueDetails.location ? this.state.venueDetails.location.address + ", " + this.state.venueDetails.location.city :"No info provided by foursquare"}</span>
            </div>
            <button
              className="modal-close"
              onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>,
      modalRoot,
    )
  }
}

export default Modal