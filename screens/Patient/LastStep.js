import React  , { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,KeyboardAvoidingView , Keyboard ,ScrollView,ImageBackground,TouchableWithoutFeedback,Dimensions} from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import {geocodeAsync } from 'expo-location';
import {host} from '../Variables';

const icon = require('C://Users/Pc/Desktop/DoctorApp/nurse.png');





const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');


const LastStep = ({route,navigation }) => {
  const icon = require('C://Users/Pc/Desktop/DoctorApp/nurse.png');
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [slideIndex, setSlideIndex] = useState(1);
  

  // Infermier type : 
  const [SelectedValue , setSelectedValue]=useState(null);
  const [Montant , setMontant]=useState(null);
  const [NbPatients , setNbPatients]=useState(null);
  const [NbHeurs , setNbHeurs]=useState(null);
  const [Commentaire , setCommentaire]=useState(null);
  const [InfermierNum , setInfermierNum]=useState(null);
  const [SelectedServiceValue , setSelectedServiceValue]=useState('');
  
  const Empty = [];
  const [markers, setMarkers] = useState([]);
  const [SelecctedNurse, setSelecctedNurse] = useState(null);
  const [Names, setNames] = useState([]);
  const [Adresses, setAdresses] = useState([]);
  const [Emails, setEmails] = useState([]);
  const [NumberPhone, setNumberPhone] = useState([]);
  const [ IdsNurse , setIdsNurse] = useState([]); 
  const [myArray, setMyArray] = useState([]);
  

  const infos = {
    id_patient:route.params.infos['id_patient'],
    email_patient : route.params.infos['email_patient'],
    nom_patient:route.params.infos['nom_patient'],
    prenom_patient: route.params.infos['prenom_patient'],
    telephone_patient: route.params.infos['telephone_patient'],
    nextpage:'Patient'
  };

  

  const HandleSeletedNurse = (Value) => {
    
    setSelecctedNurse(Value);
   
    //alert('Id Nurse  : ', IdsNurse[Value] ,' \n Id patient : ' ,infos['id_patient'] ,' \n Nom : ',Names[Value] ,'\n Adresse :', Adresses[Value] , '\n Email : ', Emails[Value] , ' \n Numéro Télephone : ' , NumberPhone[Value] );
    alert('\nNom: ' + Names[Value] + '\nAdresse: ' + Adresses[Value] + '\nEmail: ' + Emails[Value] + '\nNuméro Télephone: 0' + NumberPhone[Value]);
 
    
 
   
  };

  const finish = () => {


   
// console.log('dddd',route.params.infos['id_patient'],IdsNurse[SelecctedNurse],route.params.AllInfos['Service'],route.params.AllInfos['nbPatients'],route.params.AllInfos['nbHeurs'],route.params.AllInfos['Grade'],route.params.AllInfos['commentaire'],route.params.AllInfos['montant'], )

    fetch('http://'+host+'/dashboard/CreateTicket.php',{method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id_patient:route.params.infos['id_patient'],
      id_nurse:IdsNurse[SelecctedNurse],
     tckt_service:route.params.AllInfos['Service'],
      tck_NbPatients:route.params.AllInfos['nbPatients'],
      tckt_time:route.params.AllInfos['nbHeurs'],
      tckt_grade:route.params.AllInfos['Grade'],
      tckt_cmnt:route.params.AllInfos['commentaire'],
      tckt_montant:route.params.AllInfos['montant'],
  
  
    }),})
    .then(response => response.json())
    .then(response => {
      console.log("response : ");
      console.log(response);
    
    if(response=='true'){

      alert("Le ticket est bien Crée  ");
        navigation.navigate("RedirectPageP",{infos});
      }else { 
        alert("Une erreur s'est produite, Veuillez vous recreer un ticket  ");
        navigation.navigate("RedirectPageP",{infos});

      }
     


    })

  
  }

  useEffect(() => {
   // console.log(route.params.infos);

    //console.log(route.params.AllInfos);

  

  
    if (route.params && route.params.AllInfos) {
  
      
      fetch('http://'+host+'/dashboard/ApiAdress.php',{method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Grade:route.params.AllInfos['Grade'],
    
      }),})
      .then(response => response.json())
      .then(data => {
      
      // iterate through each element in the data array
      for (let i = 0; i < data.length; i++) {
        // assign the Address_nurse value to the corresponding index in the test array
        Adresses[i]=(data[i]['Address_nurse']);
        Names[i]=(data[i]['nom_nurse'] + " " + data[i]['prenom_nurse']) ;
        NumberPhone[i]=(data[i]['telephone_nurse']);
        Emails[i]=(data[i]['email_nurse']);
        IdsNurse[i]=(data[i]['id_nurse']);
 
         }
        
    // console.log(Adresses);
    
      
      //const addresses = data.split("|");
    if(typeof Adresses !== 'undefined'){
      fetchMarkers(Adresses);}else {fetchMarkers(Empty);}
      
    });
    async   function fetchMarkers(Adresses) {
      const newMarkers = await getMarkersFromAddresses(Adresses);
      setMarkers(newMarkers);
    } }
   
    }, [route.params]);

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

      <View  style={styles.container}>
       
        <View >



<View style={{width:screenHeight/4.11,height:screenHeight/3}}>


<View style={[styles.slide, { display: slideIndex === 1 ? 'flex' : 'none' }]}>

<View style={[styles.secondBackground,{  height: 460 ,marginTop:100 ,paddingTop:10}]}>




<MapView style={styles.map} 
provider={PROVIDER_GOOGLE}
initialRegion={{
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
   
  





  <View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:5}]} onPress={() => navigation.navigate('ServiceInfos',{infos})} >
            <Text style={styles.buttonText}>Revenir</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2,{margin:10}]} onPress={finish}  >
            <Text style={styles.buttonText}>Créer ticket</Text>
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
  

  container: {
    flex: 1,
    backgroundColor:"#fffff",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flexDirection: 'row',
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
      map: {
        width: '99%',
        height: '80%',
        
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

    marginLeft: "7%",
    marginTop: "10%",
    height: "60%",
    width:"180%",
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

export default LastStep;
