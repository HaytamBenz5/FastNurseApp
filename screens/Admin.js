import React , { useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,TextInput,Image ,ImageBackground,Dimensions} from 'react-native';
const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');
import {host} from './Variables';
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
const Admin = ({navigation }) => {
  const [Address_nurse, setAddress_nurse] = useState([]);
  const [Grade_nurse, setGrade_nurse] = useState([]);
  const [date_nurse, setdate_nurse] = useState([]);
  const [email_nurse, setemail_nurse] = useState([]);
  const [id_nurse, setid_nurse] = useState([]);
  const [nom_nurse, setnom_nurse] = useState([]);
  const [prenom_nurse, setprenom_nurse] = useState([]);
  const [telephone_nurse,settelephone_nurse] = useState([]);

  const [card1, setCard1] = useState(Card1);
  const [card2, setCard2] = useState(Card2);


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
  
  useEffect(() => {

    const intervalId = setInterval(() => {
      

    fetch('http://'+host+'/dashboard/CheckNurseRequests.php',{method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
   })
    .then(response => response.json())
    .then(data => {
       
    
     /// console.log(data['data']);
//console.log(data);
   
      for (let i = 0; i < data.length; i++) {
        id_nurse[i]=data[i]['id_nurse'];
        nom_nurse[i]=data[i]['nom_nurse'];
       prenom_nurse[i]=data[i]['prenom_nurse'];
        telephone_nurse[i]=data[i]['telephone_nurse'];
        email_nurse[i]=data[i]['email_nurse'];
        Grade_nurse[i]=data[i]['Grade_nurse'];
       Address_nurse[i]=data[i]['Address_nurse'];
         date_nurse[i]=data[i]['date_nurse'];
  
      
                  }
                 


      })              


    }, 500);

   }, [ ]);

    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;


  return (
    

    <View style={{ width:"100%",height:"100%"}}>
<Text style={{fontSize:25,fontWeight:'bold',marginTop:90,justifyContent:'center',alignItems:'center'}}>Dashboard Admin</Text>
<ScrollView style={{marginBottom:50}}>

<View style={styles.container5}>



{card1.map((card) => (
        <View key={card.id} style={styles.parentCard}>
          <TouchableOpacity onPress={() => toggleExpand1(card.id)}>
            <Text style={styles.parentCardTitle}>Demandes d'inscription</Text>
          </TouchableOpacity>
          {card.expanded && (
            <View style={styles.childList}>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <Text style={{fontWeight:'bold'}}>Nurse </Text> 
          <Text style={{fontWeight:'bold'}}>Adresse </Text>
          <Text style={{fontWeight:'bold'}}>Date demandes </Text></View>
              {  
              } 
{id_nurse.map((id_nurse, index) => (
  <TouchableOpacity key={index} onPress={() => navigation.navigate('RequestsAdmin',{
    id_nurse:id_nurse
   ,nom_nurse:nom_nurse[index]
   ,prenom_nurse:prenom_nurse[[index]]
   ,email_nurse:email_nurse[index]
   , Grade_nurse:Grade_nurse[index]
   , Address_nurse:Address_nurse[index]
   , date_nurse:date_nurse[index]
   , telephone_nurse:telephone_nurse[index] })}>
        <View style={{ flexDirection: 'row', borderBottomWidth:0.3,borderTopWidth:0.3,paddingBottom:10,paddingTop:20}}>
          <Text style={{ flex: 1 }}>{id_nurse}</Text>
          <Text style={{ flex: 1 }}>{Address_nurse[index]}</Text>
          <Text style={{ flex: 1 }}>{date_nurse[index]}</Text>
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
          {card.expanded && (
            <View style={styles.childList}>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <Text style={{fontWeight:'bold'}}>titre  </Text> 
          <Text style={{fontWeight:'bold'}}>Date Notification </Text></View>
              {  //// Hna fen der boucle deyl infos li jbti mn base de données
              } 

            </View>
          )}
        </View>
      ))}



    </View>
 

    <TouchableOpacity style={[styles.button2,{margin:5}]} onPress={()=> navigation.navigate('RedirectPageA_logout')}>
            <Text style={styles.buttonText}>Se deconnecter </Text>
          </TouchableOpacity>

    </ScrollView>





    <View style={[styles.secondBackground]}>
  <TouchableOpacity style={{ marginLeft:screenWidth/2.6 }} onPress={() => navigation.navigate('Admin')}>
    <Image source={home} style={{ width: screenWidth / 10, height: screenHeight / 24 }} />
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

        button2: {
          padding: 10,
          width:100,
          backgroundColor: '#0B8FC7',
          borderRadius: 20,
        alignSelf:'center',
      
        },
        buttonText: {
          color: '#fff',
          fontSize: 12,
          fontWeight: 'bold',
          alignSelf:'center'
        },
        buttonContainer: {
          alignSelf: 'center',
          marginTop: 20,
        
        }});




export default Admin
