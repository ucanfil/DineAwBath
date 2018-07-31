import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types'

export class MapContainer extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired
  }

  state = {
    selectedPlace: {},
    activeMarker: {}
  }

  onMouseOverMarker = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null
      })
    }
  };

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null
    });
  };

  render() {
    const { google, places, onOpenModal } = this.props;
    // Map Style object
    const style = {
      width: '100%',
      height: '100%'
    }

    // Creating points array of places
    const points = [];
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < places.length; i++) {
      // Get the position from the locations array.
      const myLatLng = new google.maps.LatLng(places[i].location.lat, places[i].location.lng);
      points.push(myLatLng);
      bounds.extend(points[i]);
    }

    return (
      <Map
        google={google}
        zoom={15}
        style={style}
        initialCenter={{
          lat: 51.381417,
          lng: -2.359043
        }}
        onClick={this.onMapClicked}
        bounds={bounds}
        >

        {places.map((venue, i) => (
          <Marker
            key={i}
            onClick={() => onOpenModal(venue)}
            name={venue.name}
            position={{ lat: venue.location.lat, lng: venue.location.lng}}
            onMouseOver={this.onMouseOverMarker}
            animation={google.maps.Animation.DROP}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAGdUxTeBQZ8-9dXpXLwdbTGBuL4RQ_2NE')
})(MapContainer)
