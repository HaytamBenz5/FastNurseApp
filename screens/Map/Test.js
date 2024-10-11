import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker,Callout  } from 'react-native-maps';
import {geocodeAsync } from 'expo-location';
const icon = require('C://Users/Pc/Desktop/DoctorApp/nurse.png');
export default function Test(Grade) {
  const Empty = [];
  const [markers, setMarkers] = useState([]);
  const [SelecctedNurse, setSelecctedNurse] = useState(null);
  const [Names, setNames] = useState([]);
  const [Adresses, setAdresses] = useState([]);
  const [Emails, setEmails] = useState([]);
  const [NumberPhone, setNumberPhone] = useState([]);
  const [AllInfos , setAllInfos]=useState([]);
  const HandleSeletedNurse = (Value) => {
    
    setSelecctedNurse(Value);
   
    console.log('Nom : ',Names[Value] ,'\n Adresse :', Adresses[Value] , '\n Email : ', Emails[Value] , ' \n Numéro Télephone : ' , NumberPhone[Value] );
   
   
  };

  useEffect(() => {
    fetch('http://192.168.43.137/dashboard/ApiAdress.php',{method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Grade:"Débutant",
  
    }),})
    .then(response => response.json())
    .then(data => {
// iterate through each element in the data array
        for (let i = 0; i < data.length; i++) {
       // assign the Address_nurse value to the corresponding index in the test array
       Adresses.push(data[i]['Address_nurse']);
       Names[i]=(data[i]['nom_nurse'] + " " + data[i]['prenom_nurse']) ;
       NumberPhone.push(data[i]['telephone_nurse']);
       Emails.push(data[i]['email_nurse']);

        }
        
    // console.log(Adresses);
      /*console.log(Names);
      console.log(NumberPhone);
      console.log(Emails);*/
      
      //const addresses = data.split("|");
    if(typeof Adresses !== 'undefined'){
      fetchMarkers(Adresses);}else {fetchMarkers(Empty);}
      
    });
    async   function fetchMarkers(Adresses) {
      const newMarkers = await getMarkersFromAddresses(Adresses);
      setMarkers(newMarkers);
    }
  }, []);

  const askPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return(false);
    }
    return(true);
    //let location = await Location.getCurrentPositionAsync({});
  };

  async function getMarkersFromAddresses(addresses) {

    const result = await askPermission();
    if (result === true) {


    const markers = [];

    for (let i = 0; i <  addresses.length; i++) {
      try {
        const location = await geocodeAsync(addresses[i]);
        markers.push({
          title: `${addresses[i]} `,
          coordinates: {
            latitude: location[0].latitude,
            longitude: location[0].longitude,
          },
        });
      } catch (error) {
        console.log(`Error geocoding addrsss: ${addresses[i]} [${error}]`);
      }
    }
  
    return markers;}
  }





    
  
  return (
    <View style={styles.container}>

<MapView style={styles.map}  initialRegion={{
        latitude: 33.570816,
        longitude: -7.6316672,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      showsUserLocation={true}
      >

      {markers.map((marker, index) => (
          <Marker key={index} title={marker.title} onPress={() => HandleSeletedNurse(index)}
          image={icon}
        
          coordinate={marker.coordinates} />
        ))}

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

