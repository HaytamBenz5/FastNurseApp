import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image ,ScrollView,Dimensions,TextInput,Alert } from 'react-native';
import {host} from './Variables';
import {Picker} from '@react-native-picker/picker';



const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');0


const TicketPage = ({route,navigation }) => {

    ///////

    const infos = {
      id_patient:route.params.infos['id_patient'],
      email_patient : route.params.infos['email_patient'],
      nom_patient:route.params.infos['nom_patient'],
      prenom_patient: route.params.infos['prenom_patient'],
      telephone_patient: route.params.infos['telephone_patient'],
      nextpage:'Patient'
    };
    //////
  
  const [Montant , setMontant]=useState("null");
  const [NbHeurs , setNbHeurs]=useState('null');
  const [PatientsNb , setPatientsNb]=useState(0);
  const [Commentaire , setCommentaire]=useState('null');
  const [Service , setService]=useState('null');
  const [flag , setflag]=useState(0);

  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [tcktID, settcktID] = useState(route.params.tcktId);




  const SupprimerTicket = async(TicketId,flag)=> {


if(flag===1){
    
    const response = await fetch('http://'+host+'/dashboard/DeleteTicket.php',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tckt_id:TicketId,
  
    }),
  });

  const data = await response.json();
console.log(data);
navigation.navigate('RedirectPageP',{infos});

  }
}

  const Verification =   (TicketId)=>{ 
    Alert.alert(
      'Confirmation',
      'Etes vous sure ? ',
      [
        { text: 'Oui', onPress: ()=> SupprimerTicket(TicketId,1) },
        { text: 'Annuler', onPress: ()=>SupprimerTicket(TicketId,0) },
      ]
    );
 }
  useEffect(() => {

    const GetTicketInfos = async() => {

      try {

        console.log("Check Time ...this is the Ticket_id -->", route.params.tcktId);
        
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
      
    

    

         settcktID(data['tckt_id'])
         setService(data['tckt_Service']);
         setMontant(data['tckt_montant']);
         setCommentaire(data['tckt_cmnt']);
         setPatientsNb(data['tckt_NbPatients']);
         setNbHeurs(data['tckt_time']);
     
   
      

      } catch (error) {
        console.log(error);
      }
      
    } 
  //  console.log(infos.adresse_patient);

   //const intervalId = setInterval(() => {
      

GetTicketInfos();

  }, []);

  const changer = async() => {

    const response = await fetch('http://'+host+'/dashboard/ModifyTicket.php',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tckt_id:route.params.tcktId,
      PatientsNb:PatientsNb,
      NbHeurs:NbHeurs,
      Montant:Montant,
      Commentaire:Commentaire,
  
    }),
  })

  const data = await response.json();

  if (data.message === "Updated Successfuly") {
    Alert.alert("Ok..", "Modifier avec Succes");
    navigation.navigate('RedirectPageP',{infos});

  } else {
    console.log(data.message);
  }

  };



  
  
  return (

      <View style={styles.container}>
       
        <View >
        <Text style={{fontSize:30,marginLeft:screenWidth/20,fontWeight:'bold',marginTop:screenHeight/20}}>  N° Ticket  : {tcktID} </Text>
  
  <View>
 
 
  <View style={[styles.secondBackground,{  height:410,marginTop:20 , width:screenWidth-10,marginLeft:5}]}>

<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold',paddingTop:20}}>Vos  informations  : </Text>
<View style={[{height:'70%',marginLeft:5,marginTop:20,padding:6 }]}>
<ScrollView style={{borderColor:'black',borderWidth:0,borderRadius:5,padding:10,marginBottom:-15,height:"50%"}}>

<Text style={{fontWeight:'bold',fontSize:14}}>Service demandé : </Text><Text>{Service}</Text> 

  



  <Text style={{fontWeight:'bold',fontSize:14}}>Nombre de patients demandé :</Text> 

  <Picker
        selectedValue={PatientsNb}
        onValueChange={(itemValue, itemIndex) => setPatientsNb(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />

      </Picker>


  <Text style={{fontWeight:'bold',fontSize:14}}>Nombre d'heurs demandées :</Text> 
  <Picker
        selectedValue={NbHeurs}
        onValueChange={(itemValue, itemIndex) => setNbHeurs(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />

      </Picker>

  <Text style={{fontWeight:'bold',fontSize:14}}>Montant (DH) :</Text> 
  <View style={{flexDirection:'row',paddingBottom:9}}>  
  <TextInput
    style={{borderWidth:0.4,borderRadius:8,height:35,width:150,width:"80%"}}
    placeholder="Modifier Valeur.... "
    multiline={false}
    value={Montant}
    keyboardType={'numeric'}
    onChangeText={setMontant}
    required={true}
  />
  </View> 




  <Text style={{fontWeight:'bold',fontSize:14}}>Commentaire:</Text> 
  <View style={{flexDirection:'row',paddingBottom:9}}> 
  <TextInput
    style={{borderWidth:0.4,borderRadius:8,height:35,width:"80%"}}
    placeholder="Modifier Valeur.... "
    multiline={false}
    value={Commentaire}
    onChangeText={setCommentaire}
    required={true}
  />
  </View> 

  </ScrollView>

  


<View style={{flexDirection:'row',marginTop:20, justifyContent:'center'}} >
<TouchableOpacity style={[styles.button2,{margin:5}]} onPress={()=> Verification(tcktID)}>
            <Text style={styles.buttonText}>Supprimer Ticket</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button2,{margin:5}]} onPress={changer}>
            <Text style={styles.buttonText}>Appliquer les changement</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button2,{margin:5}]}>
            <Text style={styles.buttonText}>Voir Map </Text>
          </TouchableOpacity></View>
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

export default TicketPage;
