import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker,Callout  ,PROVIDER_GOOGLE} from 'react-native-maps';

const icon = require('C://Users/Pc/Desktop/DoctorApp/nurse.png');
export default function Client() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let La = 'Waiting for location...';
  let Lo = 'waiting for location...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const { latitude, longitude } = location.coords;
    La = parseFloat(`${latitude}`);
    Lo = parseFloat(`${longitude}`);


    
  }
  
  return (
    <View style={styles.container}>

      <MapView style={styles.map} 
      
      initialRegion={{
        latitude: 33.570816,
        longitude: -7.6316672,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      showsUserLocation={true}
      
      >

<Marker
   coordinate={{ latitude: 33.5452, longitude:-7.6518142 }}
   providor={PROVIDER_GOOGLE}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>



<Marker
   coordinate={{ latitude: 33.5379025, longitude:-7.6621315 }}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>





<Marker
   coordinate={{ latitude: 33.5502802, longitude:-7.6454411 }}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>





<Marker
   coordinate={{ latitude: 33.5567178, longitude:-7.6379739 }}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>





<Marker
   coordinate={{ latitude: 33.5611523, longitude:-7.6329098 }}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>




<Marker
   coordinate={{ latitude: 33.5558995, longitude:-7.620813 }}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>




<Marker
   coordinate={{ latitude: 33.5917974, longitude:-7.581227 }}
   image={icon}
        > 
        <Callout>
        
            <Text>I 'am a nurse </Text>
          
        </Callout>
</Marker>


      </MapView>
   
    
  </View>
  );
  

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

