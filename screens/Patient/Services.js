import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,ScrollView,ImageBackground,TouchableWithoutFeedback,Dimensions} from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/logo.png';



import pediatre from 'C:/Users/Pc/Desktop/DoctorApp/pédiatre.jpg';
import postopperatoire from 'C:/Users/Pc/Desktop/DoctorApp/patientspostoperatoire.jpg';
import urgences from 'C:/Users/Pc/Desktop/DoctorApp/lesurgences.jpg';
import kinésithérapie from 'C:/Users/Pc/Desktop/DoctorApp/kinésithérapie.jpg';
import insuffisancerénal from 'C:/Users/Pc/Desktop/DoctorApp/insuffisancerénale.jpg';
import alite from 'C:/Users/Pc/Desktop/DoctorApp/patientsalités.jpg';
import graterie from 'C:/Users/Pc/Desktop/DoctorApp/graterie.jpg';
import convalescent from 'C:/Users/Pc/Desktop/DoctorApp/convalescent.jpg';
import handicape from 'C:/Users/Pc/Desktop/DoctorApp/handicapés.jpg';
import ambulance from 'C:/Users/Pc/Desktop/DoctorApp/ambulance.jpg';





const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');


const Services = ({navigation}) => {
  
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  
  
  return (

      <View style={styles.container}>
       
        <View >
        <Text style={{fontSize:50,fontWeight:'bold',marginTop:20}}> Services </Text>
  <View style={{ marginLeft:screenWidth/5}}>
  <ScrollView>
<TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Gériatrie</Text>
        <Image source={graterie} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card,  styles.selectedCard]}>
      <Text style={styles.cardTitle}>Les handicapés</Text>
        <Image source={handicape} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card,  styles.selectedCard]}>
      <Text style={styles.cardTitle}>Patients Post Opératoire</Text>
        <Image source={postopperatoire} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Période de convalescent</Text>
        <Image source={convalescent} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>patient insuffisance rénale </Text>
        <Image source={insuffisancerénal} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>patient alités</Text>
        <Image source={alite} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>kinésithérapie</Text>
        <Image source={kinésithérapie} style={styles.cardImage} />
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>pédiatrie</Text>
        <Image source={pediatre} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Les cas urgents</Text>
        <Image source={urgences} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={() => navigation.navigate('Client')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Ambulance </Text>
        <Image source={ambulance} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>

    

    </ScrollView>



</View>



<View style={[styles.footer,{justifyContent:"space-between",marginTop:10}]}>
<TouchableOpacity style={[styles.btn1,{justifyContent:'center'} ]}  onPress={() => navigation.navigate('SettingsP')} >
<Image source={settings} style={{ width:screenWidth/16, height: screenHeight/20 ,marginLeft:screenWidth/30}} />
</TouchableOpacity>

<TouchableOpacity style={[styles.btn1,{justifyContent:'center'} ]} onPress={() => navigation.navigate('Services')} >
<Image source={services} style={{ width:screenWidth/14, height: screenHeight/24  }} />
</TouchableOpacity>

<TouchableOpacity  style={[styles.btn2,{justifyContent:'center'} ]} onPress={() => navigation.navigate('ProfileP')}>
<Image source={profile} style={{ width:screenWidth/12.5, height: screenHeight/24  }} />
</TouchableOpacity>

<TouchableOpacity  style={[styles.btn3,{justifyContent:'center'} ]} onPress={() => navigation.navigate('Home1')}>
<Image source={home} style={{ width:screenWidth/10, height: screenHeight/24 }} />
    </TouchableOpacity>
</View>

       </View>






    </View>
    

    
  );
};

const styles = StyleSheet.create({

  card: {
    width:Dimensions.get('screen').width/1.8,
    height:Dimensions.get('screen').height/6,
    alignSelf:'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  selectedCard: {
    borderColor: 'blue',
  },
  cardImage: {
    height: 100,
    width: '100%',
 
  },
  cardTitle: {
    borderWidth:1,
    borderColor:'#DBDBDB',
    borderRadius:5,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bgimg:{

    width: "100%"


  },
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flexDirection: 'row',
  },
  firstBackground: {
    width:"25%",
    backgroundColor: '#FFC107',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  footer: {

    backgroundColor: "#0B8FC7",
    
      flexDirection: 'row',
    
        position:'absolute',
        bottom:0,
      
    padding:Dimensions.get('screen').height/45,
        width:Dimensions.get('screen').width,
        height: Dimensions.get('screen').height/11.5,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
      
    },
    
    
    shadow: {
     
      },
    buttonContainer: {
      alignSelf: 'center',
      marginTop: 20,
    
    },
  secondBackground: {
    shadowColor: "#000",
    shadowOffset: {
	  
    },
    shadowOpacity: 1,
    shadowRadius: 7.0,

    elevation: 9,
  backgroundColor: "#ffff",
    borderRadius: 25,

    marginLeft: "13%",
    marginTop: "40%",
    height: "60%",
    width:"75%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    
  },


  shadow: {
   
    },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 20,

  },
  button: {
    

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5.0,

    elevation: 9,


    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


});

export default Services;
