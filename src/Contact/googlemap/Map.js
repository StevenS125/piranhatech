import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from './Map.module.scss';

const style = {
  margin: '10%,10%,10%,25%',
  height: '50%',
  width: '50%',
  align: 'center'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


    render() {
        return (
          <div className={styles.mapArea}>
          <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 35.372405,
            lng: -80.781380
          }}
          zoom={10}>
    
            <Marker onClick={this.onMarkerClick}
                    title={'Piranha Technologies Head Quarters'}
                    name={'Piranha Technologies HQ'}
                     />
    
    <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
          </InfoWindow>
          </Map>
          </div>
        );
      }



}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbs6JxcBoxdwPf8FHZxRdM9-wPxoIcBis'
})(MapContainer)