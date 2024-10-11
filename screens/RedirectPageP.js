import React, { useEffect } from 'react';
import { View, Text ,Image,TextInput} from 'react-native';
const RedirectPage = ({ navigation,route}) => {
    const infos = {
        id_patient:route.params.infos['id_patient'],
        email_patient : route.params.infos['email_patient'],
        nom_patient:route.params.infos['nom_patient'],
        prenom_patient: route.params.infos['prenom_patient'],
        telephone_patient: route.params.infos['telephone_patient'],
        adresse_patient:route.params.infos.adresse_patient,
        nextpage:'LastStep'
      };
    
  useEffect(() => {
  const redirectTimer = setTimeout(() => {

 
    
    navigation.replace(route.params.infos['nextpage'],{infos});
   
     
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
