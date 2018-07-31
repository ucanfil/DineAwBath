import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as PlacesAPI from './PlacesAPI'
import PropTypes from 'prop-types'
import FocusLock from 'react-focus-lock' // >> https://github.com/theKashey/react-focus-lock
// Portal example seen from Kent C. Dodds >> https://codesandbox.io/s/00254q4n6p

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static propTypes = {
    venue: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
  }

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
    const { onClose } = this.props;
    const { name, bestPhoto, hours, location } = this.state.venueDetails;
    return ReactDOM.createPortal(
      <FocusLock>
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
          onClick={onClose}
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
            <h2>{name}</h2>
            <div className="modal-info">
              <img
                src={bestPhoto ? bestPhoto.prefix + 300 + bestPhoto.suffix : "No info provided by foursquare"}
                alt={name}
              />
              <div className="venue-details">
                <span className="highlighted">Open Now:</span><span>{hours && hours.isOpen ? hours.isOpen ? "Yes" : "No" : "No info provided by foursquare"}</span>
                <span className="highlighted">Address:</span><span>{location && location.address && location.city ? location.address + ", " + location.city : "No info provided by foursquare"}</span>
              </div>
              <button
                className="modal-close"
                onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </FocusLock>,
      modalRoot,
    )
  }
}

export default Modal