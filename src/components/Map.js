import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    selectedPlace: {name: 'Bath'}
  }

  render() {
    const style = {
      bottom: '0px',
      height: '100%',
      right: '0px',
      left: '300px',
      position: 'absolute',
    }
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={style}
        initialCenter={{
          lat: 51.381417,
          lng: -2.359043
        }}
        onClick={this.onMapClicked}
        >

        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAGdUxTeBQZ8-9dXpXLwdbTGBuL4RQ_2NE')
})(MapContainer)
