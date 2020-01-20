
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import ImageTag from '../components/ImageTag';
import Counter from '../components/Counter';
import reducer from '../src/reducer/reducer';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');

export default class Checkout extends Component {
	  state = {
			location: {coords:{
				latitude: 0,
				longitude: 0
			}}
		};

		 componentDidMount = () => {
			navigator.geolocation.getCurrentPosition(
				position => {
					// const location = JSON.stringify(position);
					
					this.setState({ location: position },()=> console.log(this.state.location));
				},
				error => Alert.alert(error.message),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
			);
		};

	render() {
		const {location} = this.state
		console.log("=>",location.coords)
		// var mapStyle = [{ "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#263c3f" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#6b9a76" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#38414e" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#212a37" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#9ca5b3" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#746855" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#1f2835" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f3d19c" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f3948" }] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#d59563" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#17263c" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#515c6d" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#17263c" }] }];
		return (
			<View style={styles.container}>
				{location.coords.latitude != 0 ? 
				<View>
				<MapView
				followsUserLocation
				showsUserLocation={true}
				provider={PROVIDER_GOOGLE}
					style={styles.map}
					// initialRegion = {{
					// 	center: {
					// 	  latitude: location.coords.latitude,
					// 	  longitude: location.coords.longitude
					// 	},
					// 	zoom: 12,
					// 	pitch: 0,
					// 	heading: 0,
					// 	altitude: 0
					//   }}
					region={{
						latitude: location.coords.latitude,
						longitude: location.coords.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				//   customMapStyle={mapStyle}
				>
					{/* <Marker style={styles.marker}
            draggable
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            onDragEnd={(e) => alert(e.nativeEvent.coordinate)}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          /> */}
				</MapView>
				{/* <View>
					<Image style={styles.marker} resizeMode="cover" source={{uri: 'https://img.favpng.com/20/24/7/map-drawing-pin-clip-art-png-favpng-Kun5RxqQpnjJhamZ9aztsSGh2.jpg'}} />
				</View> */}
				</View>
				: null}
				
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	marker:{
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center', justifyContent: 'center',
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},

});

// export default NextLoginScreen;
//AppRegistry.registerComponent('NextLoginScreen', () => NextLoginScreen);