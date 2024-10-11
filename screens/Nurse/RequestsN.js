import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image ,ScrollView,Dimensions,TextInput, Alert} from 'react-native';
import {host} from '../Variables';

const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');


const RequestN = ({route,navigation }) => {


    ///////

    const infos = {
      id_nurse:route.params.infos['id_nurse'],
      email_nurse : route.params.infos['email_nurse'],
      nom_nurse:route.params.infos['nom_nurse'],
      nom_prenom: route.params.infos['nom_nurse'],
      telephone_nurse: route.params.infos['telephone_nurse'],  
      Grade_nurse:route.params.infos['Grade_nurse'],
      Address_nurse: route.params.infos['Address_nurse'],
      tcktId:route.params.infos['TicketId'],
      nextpage:'Nurse'
    
    };
    //////
  
  const [Montant , setMontant]=useState('null');
  const [NbHeurs , setNbHeurs]=useState('null');
  const [PatientsNb , setPatientsNb]=useState(0);
  const [Commentaire , setCommentaire]=useState('null');
  const [dates , setdates]=useState('null');
  const [Service , setService]=useState('null');

  const [Nom_patient , setNom_patient]=useState('null');
  const [prenom_patient , setprenom_patient]=useState('null');
  const [Adresse_patient , setAdresse_patient]=useState('null');
  const [telephone_patient , settelephone_patient]=useState('null');




  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [tcktID, settcktID] = useState('null');
  useEffect(() => {



const get=async ()=> {
  

    const response = await fetch('http://'+host+'/dashboard/GetTicketInfos.php',
        {method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          TicketID:route.params.tcktId,
      
        }),
      })
    
      const data = await response.json();
     console.log(data);
    
      
  settcktID(data.tckt_id);
  setService(data.tckt_Service);
  setMontant(data.tckt_montant);
  setCommentaire(data.tckt_cmnt);
  setPatientsNb(data.tckt_NbPatients.toString());
  setNbHeurs(data.tckt_time);
  setdates(data.tckt_date);
  setAdresse_patient(data.adresse_patient);
  setNom_patient(data.nom_patient);
  setprenom_patient(data.prenom_patient);
  settelephone_patient(data.telephone_patient);
 
    }
    
    get();


  }, []);

  const Accepter=()=>{

    fetch('http://'+host+'/dashboard/NurseAcceptTicket.php',{method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tckt_id:route.params.tcktId,
  
    }),})
    .then(response => response.json())
    .then(data => {
    navigation.navigate("RedirectPageN",{infos})
    console.log(data);
  
      }
      )


}

const Refuser=()=>{

  fetch('http://'+host+'/dashboard/NurseRefuseTicket.php',{method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    tckt_id:route.params.tcktId,

  }),})
  .then(response => response.json())
  .then(data => {
console.log(data);

navigation.navigate("Nurse",{infos});
navigation.navigate("RedirectPageN",{infos})


    }
    )


}

  
  
  return (

      <View style={styles.container}>
       
        <View >
        <Text style={{fontSize:30,marginLeft:screenWidth/20,fontWeight:'bold',marginTop:screenHeight/20}}>  N° Ticket  : {tcktID} </Text>
  
  <View>
 
 
  <View style={[styles.secondBackground,{  height:410,marginTop:20 , width:screenWidth-10,marginLeft:5}]}>

<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold',paddingTop:20}}>Vos  informations  : </Text>
<View style={[{height:'70%',marginLeft:5,marginTop:20,padding:6 }]}>
<ScrollView style={{borderColor:'black',borderWidth:0,borderRadius:5,padding:10,marginBottom:-15,height:"50%"}}>
  <ScrollView>
<Text style={{fontWeight:'bold',fontSize:14}}>Nom et prenom patient :</Text> 
 <Text>{prenom_patient} {Nom_patient}</Text>

<Text style={{fontWeight:'bold',fontSize:14}}>Service demandé :</Text> 

<Text>{Service}</Text>


  <Text style={{fontWeight:'bold',fontSize:14}}>Nombre de patients demandé :</Text>
 <Text>{PatientsNb}</Text>


  <Text style={{fontWeight:'bold',fontSize:14}}>Nombre d'heurs demandées :</Text> 
 <Text>{NbHeurs}</Text>

  <Text style={{fontWeight:'bold',fontSize:14}}>Montant (DH) :</Text> 
<Text>{Montant}</Text>


<Text style={{fontWeight:'bold',fontSize:14}}>Adresse patient : </Text> 
 <Text>{Adresse_patient}</Text>

 <Text style={{fontWeight:'bold',fontSize:14}}>Telephone Patient:</Text> 
 <Text>0{telephone_patient}</Text>


 <Text style={{fontWeight:'bold',fontSize:14}}>Commentaire:</Text> 
  <Text>{Commentaire}</Text>
  </ScrollView>

  

  </ScrollView>

  



 </View>
 <View style={{flexDirection:'row', justifyContent:'center'}}>
 <TouchableOpacity style={[styles.button3,{margin:5}]} onPress={()=> Accepter()}>
            <Text style={styles.buttonText}>Accepter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button4,{margin:5}]} onPress={()=> Refuser()}>
            <Text style={styles.buttonText}>Refuser </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button2,{margin:5}]}>
            <Text style={styles.buttonText}>Voir Map </Text>
          </TouchableOpacity></View>
 </View>
 </View>






<View style={[styles.footer,{justifyContent:"space-between",marginTop:10}]}>
<TouchableOpacity style={[styles.btn1,{justifyContent:'center'} ]}  onPress={() => navigation.navigate('SettingsN',{infos})} >
<Image source={settings} style={{ width:screenWidth/16, height: screenHeight/20 ,marginLeft:screenWidth/30}} />
</TouchableOpacity>



<TouchableOpacity  style={[styles.btn2,{justifyContent:'center'} ]} onPress={() => navigation.navigate('ProfileN',{infos})}>
<Image source={profile} style={{ width:screenWidth/12.5, height: screenHeight/24  }} />
</TouchableOpacity>

<TouchableOpacity  style={[styles.btn3,{justifyContent:'center'} ]} onPress={() => navigation.navigate('Nurse',{infos})}>
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
  button3: {
    padding: 10,
    width:100,
    backgroundColor: 'green',
    borderRadius: 20,
  alignSelf:'center',

  },  button4: {
    padding: 10,
    width:100,
    backgroundColor: 'red',
    borderRadius: 20,
  alignSelf:'center',

  },

  bgimg:{

    width: "100%"


  },
  button2: {
    padding: 10,
    width:100,
    backgroundColor: '#0B8FC7',
    borderRadius: 20,
  alignSelf:'center',

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


    width:"75%",
    
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
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf:'center'
  },


});

export default RequestN;
