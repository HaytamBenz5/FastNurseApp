import React  , { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,KeyboardAvoidingView , Keyboard ,ScrollView,ImageBackground,TouchableWithoutFeedback,Dimensions} from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/logo.png';
import MapView, { Marker } from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';

import {geocodeAsync } from 'expo-location';
const icon = require('C://Users/Pc/Desktop/DoctorApp/nurse.png');
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

import n1 from 'C:/Users/Pc/Desktop/DoctorApp/n1.png';
import n2 from 'C:/Users/Pc/Desktop/DoctorApp/n2.png';
import n3 from 'C:/Users/Pc/Desktop/DoctorApp/n3.png';
import n4 from 'C:/Users/Pc/Desktop/DoctorApp/n4.png';
import n5 from 'C:/Users/Pc/Desktop/DoctorApp/n5.png';
import n6 from 'C:/Users/Pc/Desktop/DoctorApp/n6.png';
import n7 from 'C:/Users/Pc/Desktop/DoctorApp/n7.png';
import Test from '../Map/Test';




const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');


const ServiceInfos = ({navigation,route}) => {
  const icon = require('C://Users/Pc/Desktop/DoctorApp/nurse.png');
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [slideIndex, setSlideIndex] = useState(1);
  

  // Infermier type : 
  const [SelectedValue , setSelectedValue]=useState(null);


  const [Montant , setMontant]=useState(3);
  const [NbPatients , setNbPatients]=useState('1');
  const [NbHeurs , setNbHeurs]=useState('1');
  const [Commentaire , setCommentaire]=useState(null);
  const [InfermierNum , setInfermierNum]=useState(null);
  const [SelectedServiceValue , setSelectedServiceValue]=useState('');
  

  const infos = {
    id_patient:route.params.infos['id_patient'],
    email_patient : route.params.infos['email_patient'],
    nom_patient:route.params.infos['nom_patient'],
    prenom_patient: route.params.infos['prenom_patient'],
    telephone_patient: route.params.infos['telephone_patient'],
    nextpage:'LastStep'
  };

 
  const Finish = ()=>{
    const AllInfos = {
      Service:SelectedServiceValue,
      montant: Montant,
      nbPatients: NbPatients,
      nbHeurs: NbHeurs,
      commentaire: Commentaire,
      Grade: SelectedValue,
    };

 navigation.navigate('RedirectPageP2',{AllInfos,infos});
//console.log(AllInfos);
//console.log(infos);
setCommentaire(null);
setMontant(null);
setNbHeurs(null);
setNbPatients(null);
setSelectedServiceValue('');
setSelectedValue(null);
setInfermierNum(null);
setSlideIndex(1);
  }
  

  const handleCardPress = (cardValue) => {
    
    setSelectedValue(cardValue);
    if(cardValue === 'Auxiliaire'){
      setInfermierNum(1);
  }else if (cardValue ==='Spécialisé'){
    setInfermierNum(2);
}else if (cardValue ==='Croissant rouge'){
  setInfermierNum(3);
}else if (cardValue ==='Ambulancier'){
setInfermierNum(4);
}else if (cardValue ==='Reducation'){
setInfermierNum(5);
}else if (cardValue ==='Aide soignant'){
setInfermierNum(6);
}else{alert("Veuillez vous choisir un type");}
 

    
  };
  const handleServicePress = (ServiceValue) => {

      
    setSelectedServiceValue(ServiceValue);
    indexplus();
    

  

  };
  const indexplus1 = () => {
    if(SelectedServiceValue==''){alert(" Veuillez vous choisir un service");setSlideIndex(1);}
    setSlideIndex(slideIndex + 1);
    Keyboard.dismiss();
    
  };
  const indexplus = () => {
   
    setSlideIndex(slideIndex + 1);
    Keyboard.dismiss();
    
  };
  const indexplus2 = () => {
   console.log(Montant);
    if(Montant!=null){setSlideIndex(slideIndex + 1);
      Keyboard.dismiss();}
    else{alert("veuillez vous saisir un montant ")}



  
    };

    const indexplus5 = () => {
   
      if(SelectedValue!=null && SelectedServiceValue!=''  ){setSlideIndex(slideIndex + 1);
        Keyboard.dismiss();}
      else{alert("veuillez vous choisir un type ")}
   
  
  
        
      };
    


    const indexplus4 = () => {
   
      if(InfermierNum==null){alert(" Veuillez vous choisir un infirmer ");setSlideIndex(4);}
      if(SelectedValue==null){alert(" Veuillez vous choisir un infirmer ");setSlideIndex(4);}
      
      else{setSlideIndex(slideIndex + 1);
        Keyboard.dismiss();}
        
        
      };
  const indexmoins = () => {
    setSlideIndex(slideIndex - 1);
  };







  
  return (

      <View  style={styles.container}>
       
        <View >


        <View style={[ { display: slideIndex === 1 ? 'flex' : 'none' ,height:screenHeight/1.3,marginTop:20}]}>
          
        <Text style={{fontSize:50,fontWeight:'bold',marginTop:20 , color:'black'}}> Services </Text>

        <View style={{ marginLeft:screenWidth/5}}>
  <ScrollView>
<TouchableWithoutFeedback onPress={() => handleServicePress('Gériatrie')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Gériatrie</Text>
        <Image source={graterie} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={() => handleServicePress('Les handicapés')}>
      <View style={[styles.card,  styles.selectedCard]}>
      <Text style={styles.cardTitle}>Les handicapés</Text>
        <Image source={handicape} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={() => handleServicePress('Patients Post Opératoire')}>
      <View style={[styles.card,  styles.selectedCard]}>
      <Text style={styles.cardTitle}>Patients Post Opératoire</Text>
        <Image source={postopperatoire} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => handleServicePress('Période de convalescent')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Période de convalescent</Text>
        <Image source={convalescent} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => handleServicePress('patient insuffisance rénale')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Patient insuffisance rénale </Text>
        <Image source={insuffisancerénal} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => handleServicePress('Patient alités')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Patient alités</Text>
        <Image source={alite} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => handleServicePress('Kinésithérapie')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Kinésithérapie</Text>
        <Image source={kinésithérapie} style={styles.cardImage} />
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleServicePress('pédiatrie')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>pédiatrie</Text>
        <Image source={pediatre} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => handleServicePress('Les cas urgents')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Les cas urgents</Text>
        <Image source={urgences} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={() => handleServicePress('Ambulance')}>
      <View style={[styles.card, styles.selectedCard]}>
      <Text style={styles.cardTitle}>Ambulance </Text>
        <Image source={ambulance} style={styles.cardImage} />
      </View>
    </TouchableWithoutFeedback>

    

    </ScrollView>



</View>


</View>

<View style={{width:screenHeight/4.11,height:screenHeight/3}}>


<View style={[styles.slide, { display: slideIndex === 2 ? 'flex' : 'none' }]}>
<View style={[styles.secondBackground,{  height: 320 ,marginTop:100 ,paddingTop:10}]}>


<Text style={{ marginRight:90,fontSize:20,fontWeight:'bold', marginLeft:10}}>Nombre de patients : </Text>
<View>
      <Picker
        selectedValue={NbPatients}
        onValueChange={(itemValue) => setNbPatients(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
    </View>

<Text style={{marginRight:150, fontSize:20,fontWeight:'bold', marginLeft:10}}>Le Montant   </Text>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="En DH"
    value={Montant}
    onChangeText={setMontant}
    keyboardType='numeric'

 
    required={true}
    
  /></View>
   

<Text style={{marginRight:105, fontSize:20,fontWeight:'bold', marginLeft:10}}>Nombre d'heurs :    </Text>
<View>
<Picker
        selectedValue={NbHeurs}
        onValueChange={(itemValue) => setNbHeurs(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
    </View>
  
  <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
  <TouchableOpacity style={[styles.button2,{margin:5}]}  onPress={indexmoins}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2,{margin:10}]}  onPress={indexplus2}>
            <Text style={styles.buttonText}>Continuer</Text>
          </TouchableOpacity>
  

        
          </View>
   
  </View>

      </View>



      

      <View style={[styles.slide, { display: slideIndex === 3 ? 'flex' : 'none' }]}>
<View style={[styles.secondBackground,{  height: 280 ,marginTop:120 , padding:30}]}>

<Text style={{marginRight:100, fontSize:20,fontWeight:'bold'}}>Commentaire  : </Text>
<View style={[styles.inputContainer,{height:'55%',width:'100%'}]}>
<TextInput
    style={styles.input}
    placeholder="Ajouter un Commentaire.... "
    multiline={true}
    value={Commentaire}
    onChangeText={setCommentaire}
    required={true}
    
  /></View>


<View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:5}]}  onPress={indexmoins}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2,{margin:10}]}  onPress={indexplus}>
            <Text style={styles.buttonText}>Continuer</Text>
          </TouchableOpacity>
  

        
          </View>

  
   
  </View>

      </View>



      <View style={[styles.slide, { display: slideIndex === 4 ? 'flex' : 'none' }]}>
<View style={[styles.secondBackground2,{  height: 520 ,marginTop:80}]}>

<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold',marginTop:12}}>Choix Type infirmier : </Text>
<View style={{flexDirection:'row',padding:40}}>
<TouchableOpacity  onPress={() => handleCardPress('Auxiliaire')}>
<Image source={n1} style={[{ width:112, height:112 },InfermierNum === 1 && styles.SelectedInfermier]} />
<Text  style={{fontWeight:'bold',marginLeft:20}}> Auxiliaire</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleCardPress('Spécialisé')}>
<Image source={n2} style={[{ width:112, height:112 },InfermierNum === 2 && styles.SelectedInfermier]} />
<Text style={{fontWeight:'bold',marginLeft:25}}> Spécialisé</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleCardPress('Croissant rouge')}>
<Image source={n4} style={[{ width:112, height:112 },InfermierNum === 3 && styles.SelectedInfermier]} />
<Text style={{fontWeight:'bold',marginLeft:10}}> Croissant rouge</Text>
</TouchableOpacity>    
  </View>

  <View style={{flexDirection:'row',padding:40}}>
<TouchableOpacity  onPress={() => handleCardPress('Ambulancier')}>
<Image source={n5} style={[{ width:112, height:112 },InfermierNum === 4 && styles.SelectedInfermier]} />
<Text  style={{fontWeight:'bold',marginLeft:20}}> Ambulancier</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleCardPress('Reducation')}>
<Image source={n7} style={[{ width:112, height:112 },InfermierNum === 5 && styles.SelectedInfermier]} />
<Text style={{fontWeight:'bold',marginLeft:25}}> Reducation</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleCardPress('Aide soignant')}>
<Image source={n6} style={[{ width:112, height:112 },InfermierNum === 6 && styles.SelectedInfermier]} />
<Text style={{fontWeight:'bold',marginLeft:15}}> Aide soignant</Text>
</TouchableOpacity>    
  </View>

  
  <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:5}]}  onPress={indexmoins}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2,{margin:5}]}  onPress={indexplus5}>
            <Text style={styles.buttonText}>Continuer</Text>
          </TouchableOpacity>
  

        
          </View>
   
  </View>

      </View>



      

      <View style={[styles.slide, { display: slideIndex === 5 ? 'flex' : 'none' }]}>
<View style={[styles.secondBackground,{  height:420,marginTop:90 , padding:10}]}>

<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold'}}>Valider vos informations  : </Text>
<View style={[{height:'55%',width:'80%',marginTop:20 }]}>
<Text style={{fontWeight:'bold',fontSize:14}}>Service demandé :</Text> 
  <Text>{SelectedServiceValue}</Text>
  <Text style={{fontWeight:'bold',fontSize:14}}>Nombre de patients demandé :</Text> 
  <Text>{NbPatients}</Text>
  <Text style={{fontWeight:'bold',fontSize:14}}>Nombre d'heurs demandées :</Text> 
  <Text>{NbHeurs}</Text>
<Text style={{fontWeight:'bold',fontSize:14}}>Montant (DH) :</Text>
<Text> {Montant} </Text>
<Text style={{fontWeight:'bold',fontSize:14}}>Type infermier demandé :</Text>
 <Text> {SelectedValue} </Text>
<Text style={{fontWeight:'bold',fontSize:14}}>Commentaire:</Text>
<Text> {Commentaire}</Text>
 </View>
 


 <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:5}]}  onPress={indexmoins}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2,{margin:10}]} onPress={Finish} >
            <Text style={styles.buttonText}>Valider ?</Text>
          </TouchableOpacity>
          </View>

  
   
  </View>

      </View>
 </View>


 




</View>



<View style={[styles.footer,{justifyContent:"space-between",marginTop:10}]}>
<TouchableOpacity style={[styles.btn1,{justifyContent:'center'} ]}  onPress={() => navigation.navigate('SettingsP',{infos})} >
<Image source={settings} style={{ width:screenWidth/16, height: screenHeight/20 ,marginLeft:screenWidth/30}} />
</TouchableOpacity>

<TouchableOpacity style={[styles.btn1,{justifyContent:'center'} ]} onPress={() => navigation.navigate('ServiceInfos',{infos})} >
<Image source={services} style={{ width:screenWidth/14, height: screenHeight/24  }} />
</TouchableOpacity>

<TouchableOpacity  style={[styles.btn2,{justifyContent:'center'} ]} onPress={() => navigation.navigate('ProfileP',{infos})}>
<Image source={profile} style={{ width:screenWidth/12.5, height: screenHeight/24  }} />
</TouchableOpacity>

<TouchableOpacity  style={[styles.btn3,{justifyContent:'center'} ]} onPress={() => navigation.navigate('Patient',{infos})}>
<Image source={home} style={{ width:screenWidth/10, height: screenHeight/24 }} />
    </TouchableOpacity>
</View>

       </View>






    

    
  );
};

const styles = StyleSheet.create({
  button2: {
    padding: 10,
    width:120,
    backgroundColor: '#0B8FC7',
    borderRadius: 20,
  alignSelf:'center'
  },
     
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
    backgroundColor:"#fffffff",
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
  SelectedInfermier: {
    borderColor:'blue',
    borderWidth:1.5,
    borderRadius:20
  },

  
  footer: {

    backgroundColor: "#0B8FC7",
    
      flexDirection: 'row',
    flex:0,
        position:'absolute',
        bottom:0,
      
    padding:Dimensions.get('screen').height/45,
        width:Dimensions.get('screen').width,
        height: Dimensions.get('screen').height/13,
    },
    slide: {
        flex: 1,
        paddingTop:20,
        
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
      paddingTop:20,
      padding:20,
      shadowColor: "#000",
      shadowOffset: {
      
      },
      shadowOpacity: 1,
      shadowRadius: 7.0,
  
      elevation: 9,
    backgroundColor: "#ffff",
      borderRadius: 25,
  
      marginLeft: "7%",
      marginTop: "10%",
      height: "60%",
      width:"180%",
     
    },
    secondBackground2: {
      justifyContent:'center',
      alignItems:'center',
      shadowColor: "#000",
      shadowOffset: {
      
      },
      shadowOpacity: 1,
      shadowRadius: 7.0,
  
      elevation: 9,
    backgroundColor: "#ffff",
      borderRadius: 25,
  
      marginLeft: "7%",
      marginTop: "10%",
      height: "60%",
      width:"180%",
     
    },
  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    margin: 10,
    width: '80%',
    height:'12%'
  },
  input: {
    height:30
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
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },


});

export default ServiceInfos;
