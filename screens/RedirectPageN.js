import React, { useEffect } from 'react';
import { View, Text ,Image,TextInput} from 'react-native';
const RedirectPage = ({ navigation,route}) => {
    const infos = {
      id_nurse:route.params.infos['id_nurse'],
      email_nurse : route.params.infos['email_nurse'],
      nom_nurse:route.params.infos['nom_nurse'],
      nom_prenom: route.params.infos['nom_nurse'],
      telephone_nurse: route.params.infos['telephone_nurse'],  
      Grade_nurse:route.params.infos['Grade_nurse'],
      Address_nurse: route.params.infos['Address_nurse'],
      tcktId:'tcktId',
      nextpage:route.params.infos['nextpage']
      };
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigation.replace(infos['nextpage'],{infos}); // replace  argument1 with the name of the page to redirect
    }, 2000); // set the time interval in milliseconds

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
