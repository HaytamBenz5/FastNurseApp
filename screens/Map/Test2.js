import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Define the addresses to geocode
const addresses = [
  'Résidence al Mohit, Casablanca ,Maroc',
  '1 Infinite Loop, Cupertino, CA 95014',
  '1600 Pennsylvania Ave NW, Washington, DC 20500'
];

































export default function App() {
  const [coords, setCoords] = useState([]);

  // Geocode the addresses and update the state with the coordinates
  useEffect(() => {
    const geocode = async () => {
      const baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
      const apiKey = 'pk.eyJ1IjoiaG91c3NhbWJlbnoxIiwiYSI6ImNsZXlncjBzczBjdTA0N281NmVoZ3U3YTQifQ.EMuiLKnJPotauwGvBcYZcQ';
      const result = [];

      for (const address of addresses) {
        const url = `${baseUrl}/${encodeURIComponent(address)}.json?access_token=${apiKey}`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.features && data.features.length > 0) {
            const [longitude, latitude] = data.features[0].center;
            result.push({latitude, longitude});
          } else {
            result.push(null);
          }
        } catch (error) {
          console.error(`Failed to geocode address "${address}":`, error);
          result.push(null);
        }
      }

      setCoords(result);
    };

    geocode();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={{
          latitude: 37.0902,
          longitude: -95.7129,
          latitudeDelta: 30,
          longitudeDelta: 30 * (Dimensions.get('window').width / Dimensions.get('window').height),
        }}
      >
        {coords.map((coord, index) => (
          coord && <Marker key={index} coordinate={coord} />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
