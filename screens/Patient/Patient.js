import React , { useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,TextInput,Image ,ImageBackground,Dimensions} from 'react-native';
const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');
import {host} from '../Variables';
const Card1 = [
  {
    id: '1',
    title: 'Mes Tickets',
    children: [
    'Service             Etat            Date demande',
    ],
    expanded: false,
  }
];
const Card2 = [
  {
    id: '1',
    title: 'Mes Notifications',
    children: [
    'Service             Etat            Date demande',
    ],
    expanded: false,
  }
];
const Patient = ({navigation,route }) => {
  const [Services, setServices] = useState([]);
  const [Status, setStatus] = useState([]);
  const [Dates, setDates] = useState([]);
  const [TicketId, setTicketId] = useState([]);

  const [card1, setCard1] = useState(Card1);
  const [card2, setCard2] = useState(Card2);
  ///////

  const infos = {
    id_patient:route.params.infos['id_patient'],
    email_patient : route.params.infos['email_patient'],
    nom_patient:route.params.infos['nom_patient'],
    prenom_patient: route.params.infos['prenom_patient'],
    telephone_patient: route.params.infos['telephone_patient'],
    adresse_patient:route.params.infos['adresse_patient']
  };
  //////
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const toggleExpand1 = (cardId) => {
    setCard1((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, expanded: !card.expanded } : card
      )
    );
  };
  const toggleExpand2 = (cardId) => {
    setCard2((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, expanded: !card.expanded } : card
      )
    );
  };
  
  useEffect(() =>
  {
    const GetTicketInfos = async() => {

      try {

        console.log("Check Time ...this is the patient_id -->", infos['id_patient']);
        
        const response = await fetch('http://'+host+'/dashboard/GetTicketForPatient.php',
        {method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_patient:infos['id_patient'],
      
        }),
      })
    
      const data = await response.json();
    
      if (data.message === "Some Tickets Were Found") {
        console.log(data.message);

        setServices(data.Services);
        setDates(data.dates);
        setStatus(data.status);
        setTicketId(data.ticket_id);
      } else {
        console.log(data.message)
      }

      } catch (error) {
        console.log(error);
      }
      
    } 
  //  console.log(infos.adresse_patient);

   //const intervalId = setInterval(() => {
      

GetTicketInfos();
      
  // }, 1000); // Refresh every second
   }, []);

    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;


  return (
    

    <View style={{ width:"100%",height:"100%"}}>
<Text style={{fontSize:25,fontWeight:'bold',marginTop:90,justifyContent:'center',alignItems:'center'}}> Bonjour {infos.nom_patient} {infos.prenom_patient}!</Text>
<ScrollView style={{marginBottom:50}}>

<View style={styles.container5}>



{card1.map((card) => (
        <View key={card.id} style={styles.parentCard}>
          <TouchableOpacity onPress={() => toggleExpand1(card.id)}>
            <Text style={styles.parentCardTitle}>{card.title}</Text>
          </TouchableOpacity>
          {card.expanded && (
            <View style={styles.childList}>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <Text style={{fontWeight:'bold'}}>Service </Text> 
          <Text style={{fontWeight:'bold'}}>Etat </Text>
          <Text style={{fontWeight:'bold'}}>Date demandes </Text></View>
              {  
              } 
{Services.map((Services, index) => (
  <TouchableOpacity key={index} onPress={() => navigation.navigate('TicketPage',{infos:infos,tcktId:TicketId[index]})}>
        <View style={{ flexDirection: 'row', borderBottomWidth:0.3,borderTopWidth:0.3,paddingBottom:10,paddingTop:20}}>
          <Text style={{ flex: 1 }}>{Services}</Text>
          <Text style={{ flex: 1 , color: Status[index] === 'Active' ? 'green' : Status[index] === 'pending' ? 'blue' : 'red'  }}>{Status[index]}</Text>
          <Text style={{ flex: 1 }}>{Dates[index]}</Text>
        </View>
        </TouchableOpacity>
      ))}
            </View>
          )}
        </View>
      ))}

{card2.map((card) => (
        <View key={card.id} style={styles.parentCard}>
          <TouchableOpacity onPress={() => toggleExpand2(card.id)}>
            <Text style={styles.parentCardTitle}>{card.title}</Text>
          </TouchableOpacity>
          {card.expanded  && (
            <View style={styles.childList}>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <Text style={{fontWeight:'bold'}}>Titre </Text> 
 
          <Text style={{fontWeight:'bold'}}>Date Notification </Text></View>
              {  //// Hna fen der boucle deyl infos li jbti mn base de données
              } 

            </View>
          )}
        </View>
      ))}



    </View>
 

    </ScrollView>







    <View style={[styles.secondBackground,{justifyContent:"space-between",marginTop:10}]}>
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


    secondBackground: {

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
        
        container5: {
          flex: 1,
          backgroundColor: '#fff',
          padding: 20,
          height:"50%"
        },
        parentCard: {
          backgroundColor: '#f1f1f1',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        },
        parentCardTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        },
        childList: {
          backgroundColor: '#fafafa',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        },
        childItem: {
          fontSize: 16,
          marginBottom: 5,
          borderColor:'black',
          border:1
          
        },

        buttonContainer: {
          alignSelf: 'center',
          marginTop: 20,
        
        }});




export default Patient
