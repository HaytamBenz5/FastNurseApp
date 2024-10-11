import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,ImageBackground} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
//import Test from './screens/Test';
import TicketPage from './screens/TicketPage';






import Nurse from './screens/Nurse/Nurse';
import RequestsN from './screens/Nurse/RequestsN';
import SettingsN from './screens/Nurse/SettingsN';
import ProfileN from './screens/Nurse/ProfileN';



import RedirectPageP from './screens/RedirectPageP';

import RedirectPageP2 from './screens/RedirectPageP2';

import RedirectPageN from './screens/RedirectPageN';

import RedirectPageA from './screens/RedirectPageA';

import RedirectPageA_logout from './screens/RedirectPageA_logout';
import Reg from './screens//Register/Reg';
import RegisterN from './screens/Register/RegisterN';
import RegisterP from './screens/Register/RegisterP';
import ProfileP from './screens/Patient/ProfileP';
import Home1 from './screens/Home1';
import Login1 from './screens/Login1';
import Patient from './screens/Patient/Patient';
import SettingsP from './screens/Patient/SettingsP';
import ServiceInfos from './screens/Patient/ServiceInfos';
import LastStep from './screens/Patient/LastStep';

import Admin from './screens/Admin';
import RequestsAdmin from './screens/RequestsAdmin';




import Test from './screens/Test';

export default function App() {

  return (
  
<NavigationContainer>
<Stack.Navigator initialRouteName='Home1'>
<Stack.Screen name="Test" component={Test}   options={{ headerShown: false}}/>
 
 
<Stack.Screen name="Login1" component={Login1}   options={{ headerShown: false}}/>

<Stack.Screen name="Nurse" component={Nurse}   options={{ headerShown: false}}/>

<Stack.Screen name="RequestsN" component={RequestsN}   options={{ headerShown: false}}/>

<Stack.Screen name="ProfileN" component={ProfileN}   options={{ headerShown: false}}/>

<Stack.Screen name="RedirectPageA_logout" component={RedirectPageA_logout}   options={{ headerShown: false}}/>

<Stack.Screen name="RedirectPageP" component={RedirectPageP}   options={{ headerShown: false}}/>

<Stack.Screen name="RedirectPageP2" component={RedirectPageP2}   options={{ headerShown: false}}/>
<Stack.Screen name="RedirectPageN" component={RedirectPageN}   options={{ headerShown: false}}/>


<Stack.Screen name="RedirectPageA" component={RedirectPageA}   options={{ headerShown: false}}/>







<Stack.Screen name="Admin" component={Admin}   options={{ headerShown: false}}/>
<Stack.Screen name="RequestsAdmin" component={RequestsAdmin}   options={{ headerShown: false}}/>




<Stack.Screen name="TicketPage" component={TicketPage}   options={{ headerShown: false}}/>
  <Stack.Screen name="Patient" component={Patient}   options={{ headerShown: false}}/>
  <Stack.Screen name="SettingsP" component={SettingsP}   options={{ headerShown: false}}/>
  <Stack.Screen name="ServiceInfos" component={ServiceInfos}   options={{ headerShown: false}}/>
  <Stack.Screen name="LastStep" component={LastStep}   options={{ headerShown: false}}/>
  <Stack.Screen name="ProfileP" component={ProfileP}   options={{ headerShown: false}}/>
  <Stack.Screen name="Home1" component={Home1}   options={{ headerShown: false}}/>
  <Stack.Screen name="RegisterN" component={RegisterN}   options={{ headerShown: false}}/>
  <Stack.Screen name="RegisterP" component={RegisterP}   options={{ headerShown: false}}/>
  <Stack.Screen name="Reg" component={Reg}   options={{ headerShown: false}}/>

<Stack.Screen name="SettingsN" component={SettingsN}   options={{ headerShown: false}}/>
  </Stack.Navigator>

   
</NavigationContainer>


  );
}const styles = StyleSheet.create({
  container: {
  width:"100%",
  height: "100%"
   
  },
});