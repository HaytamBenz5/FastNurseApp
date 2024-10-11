
import React, { useState } from 'react';
  import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground, Dimensions } from 'react-native';
  
  import logo from '../../logo.png';
  import homeIcon from '../../home.png';
  import settingsIcon from '../../settings.png';
  import doctorIcon from '../../Doctor.png';
  import profileIcon from '../../profile.png';
  
  const ProfileN = ({ navigation, route }) => {
  
    const infos = {
      id_nurse:route.params.infos['id_nurse'],
      email_nurse : route.params.infos['email_nurse'],
      nom_nurse:route.params.infos['nom_nurse'],
      nom_prenom: route.params.infos['nom_nurse'],
      telephone_nurse: route.params.infos['telephone_nurse'],  
      Grade_nurse:route.params.infos['Grade_nurse'],
      Address_nurse: route.params.infos['Address_nurse']
    
    };
  
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
  
    return (
      <View style={styles.container}>
  
       
        <View style={{ flex: 0,  alignItems: 'center',marginBottom:screenHeight/2 }}>
        <View style={{ width: screenWidth, height: screenHeight/6, backgroundColor: 'grey' }} >
  
        </View>
        <View style={{  alignItems: 'center',justifyContent:'center',width: screenHeight/7, height: screenHeight/7,marginTop:screenHeight/55, backgroundColor: 'blue',borderRadius:66, position: 'absolute' }} >
        <Image source={profileIcon} style={{width:"100%",height:"100%"}} />
  
        </View>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Profile Page:</Text>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nom et prénom : {infos.nom_nurse} {infos.nom_prenom}</Text>
          <Text style={styles.infoText}>Email: {infos.email_nurse}</Text>
          <Text style={styles.infoText}>Téléphone: 0{infos.telephone_nurse}</Text>
          </View>
      </View>
       
        <View style={styles.footer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('SettingsN',{infos})}>
            <Image source={settingsIcon} style={styles.icon} />
          </TouchableOpacity>
  

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('ProfileN',{infos})}>
            <Image source={profileIcon} style={styles.icon} />
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Nurse',{infos})}>
            <Image source={homeIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
  
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
      marginLeft: 20
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#0B8FC7'
    },
    infoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      borderWidth: 2,
      borderColor: '#0B8FC7',
      padding: 10,
      borderRadius: 10,
      height:"25%",
   
    },
    infoContainer2: {
      flex:0,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 1,
      borderWidth: 2,
      borderColor: '#0B8FC7',
      padding: 10,
      borderRadius: 200,
      height:"22%",
      width:"50%"
    },
    infoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0B8FC7',
      marginVertical: 5
    },
    button: {
      marginTop: 20,
      backgroundColor: '#0B8FC7',
      padding: 10,
      borderRadius: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    footer: {
      flexDirection: 'row',
      backgroundColor: '#0B8FC7',
      position: 'absolute',
      bottom: 0,
      padding: 20,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      width: 30,
      height: 30,
      tintColor: '#fff'
    }
  });
  
  export default ProfileN;