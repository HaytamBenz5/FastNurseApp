import React , { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,ImageBackground,Dimensions} from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/logo.png';
import {host} from '../Variables';
const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');

const Card2 = [
  {
    id: '1',
    expanded: false,
  }
];
const Nurse = ({navigation , route }) => {

  
  const infos = {
    id_nurse:route.params.infos['id_nurse'],
    email_nurse : route.params.infos['email_nurse'],
    nom_nurse:route.params.infos['nom_nurse'],
    nom_prenom: route.params.infos['nom_nurse'],
    telephone_nurse: route.params.infos['telephone_nurse'],  
    Grade_nurse:route.params.infos['Grade_nurse'],
    Address_nurse: route.params.infos['Address_nurse'],
    tcktId:'tcktId',
    nextpage:'Login1'
  };


////
const [Status , setStatus]=useState([]);
const [Services, setServices] = useState([]);
const [Montant, setMontant] = useState([]);
const [NBpatients, setNBpatients] = useState([]);
  const [Dates, setDates] = useState([]);
  const [TicketId, setTicketId] = useState([]);

////

  const [card2, setCard2] = useState(Card2);
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;

    const toggleExpand2 = (cardId) => {
      setCard2((prevCards) =>
        prevCards.map((card) =>
          card.id === cardId ? { ...card, expanded: !card.expanded } : card
        )
      );
    };





  
    useEffect(() => { 
      
      
      //const intervalId = setInterval(() => {
        
  
      fetch('http://'+host+'/dashboard/CheckticketNurse.php',{method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_nurse:infos['id_nurse'],
        
      }),})
      .then(response => response.json())
      .then(data => {
    //  console.log(data);  
   // console.log(data[0]);
    
        for (let i = 0; i < data.length; i++) {
      
          Services[i]=data[i]['tckt_service'];
          Status[i]=data[i]['tckt_status'];
          Montant[i]=data[i]['tckt_montant'];
          NBpatients[i]=data[i]['tckt_NbPatients'];
  
          TicketId[i]=data[i]['tckt_id'];
  //console.log(' ticekt  Number [' ,i ,']: ', Services[i] ,' | ' , Status[i] , '|' , Montant[i]  , '|' , NBpatients[i] );
                    }
                   
                
  
  
        })
    //  }, 1000); 
  
     }
   
  , [ ]);

  return (
    

    <View style={{ width:"100%",height:"100%"}}>
<Text style={{fontSize:25,fontWeight:'bold',marginTop:50,justifyContent:'center',alignItems:'center'}}> Bonjour inférmier {infos['nom_nurse']}</Text>









<View style={styles.container5}>
{card2.map((card) => (
        <View key={card.id} style={styles.parentCard}>
          <TouchableOpacity onPress={() => toggleExpand2(card.id)}>
            <Text style={styles.parentCardTitle}>Les demandes recues</Text>
          </TouchableOpacity>
          {card.expanded  && (
            <View style={styles.childList}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold'}}>Service  </Text> 
          <View style={{flexDirection:'column'}}><Text style={{fontWeight:'bold'}}>Montant </Text>
          <Text style={{fontWeight:'bold'}}> /Nombre patients</Text></View>
          <Text style={{fontWeight:'bold'}}>Status  </Text></View>
             {//navigation.navigate('RequestsN',{infos:infos,tcktId:TicketId[index]})
             }
             {Services.map((Services, index) => (
  <TouchableOpacity key={index} onPress={ () => navigation.navigate('RequestsN',{infos:infos,tcktId:TicketId[index]})}>
        <View style={{ flexDirection: 'row', borderBottomWidth:0.3,borderTopWidth:0.3,paddingBottom:10,paddingTop:20}}>
          <Text style={{ flex: 1 }}>{Services}</Text>
          <Text style={{ flex: 1 }}>{Montant[index]} / {NBpatients[index]}</Text>
          <Text style={{ flex: 1 ,color: Status[index] ==='Active' ? 'green' : 'red'}}>{Status[index]}</Text>
          
        </View>
        </TouchableOpacity>
      ))}
              

            </View>
          )}
        </View>
      ))}


</View>

<TouchableOpacity  style={[styles.btn3,{justifyContent:'center'} ]} onPress={() => navigation.navigate('RedirectPageN',{infos})}>
<Image source={home} style={{ width:screenWidth/10, height: screenHeight/24 }} />
    </TouchableOpacity>

<View style={[styles.secondBackground,{justifyContent:"space-between",marginTop:10}]}>
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




export default Nurse;
