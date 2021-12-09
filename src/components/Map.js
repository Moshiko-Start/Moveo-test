import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
	center = {
		lat: +this.props.location.latitude,
		lng: +this.props.location.longitude,
	};
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		mapCenter: {
			lat: this.center.lat,
			lng: this.center.lng,
		},
	};

	render() {
		const containerStyle = {
			position: 'realtive',
			width: '300px',
			height: '300px',
		};

		const style = {
			position: 'relative',
			width: '300px',
			height: '300px',
		};
		return (
			<Map
				style={style}
				containerStyle={containerStyle}
				google={this.props.google}
				initialCenter={{
					lat: this.state.mapCenter.lat,
					lng: this.state.mapCenter.lng,
				}}
				zoom={5}
			>
				<Marker
					position={{
						lat: this.state.mapCenter.lat,
						lng: this.state.mapCenter.lng,
					}}
				/>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCaWcyub3jEccayAEQELi8Wl_08Ldq1DYI',
})(MapContainer);
