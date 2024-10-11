import React, { useEffect } from 'react';
import { View, Text ,Image,TextInput} from 'react-native';
const RedirectPage = ({ navigation,route}) => {

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigation.replace('Admin'); // replace  argument1 with the name of the page to redirect
    }, 3000); // set the time interval in milliseconds

    return () => clearTimeout(redirectTimer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Patientez ...</Text>
      <Image 
        source={require('../loading.gif')}  
        style={{width: 100, height: 100 ,justifyContent:'center',alignContent:'center',alignItems:'center'}}
    />
   
    </View>
  );
}

export default RedirectPage;
