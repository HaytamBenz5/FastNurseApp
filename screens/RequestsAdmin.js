import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button,Image,Modal ,ScrollView,Dimensions,TextInput} from 'react-native';
import { host } from './Variables';
const home = require('C:/Users/Pc/Desktop/DoctorApp/home.png');
const settings = require('C:/Users/Pc/Desktop/DoctorApp/settings.png');
const services = require('C:/Users/Pc/Desktop/DoctorApp/Doctor.png');
const profile = require('C:/Users/Pc/Desktop/DoctorApp/profile.png');


const RequestsAdmin = ({route,navigation }) => {

  const imageName = "CIN_Recto_Haitam_Benziana.jpg";
const imagePath = `file:///C:/Users/Pc/Desktop/DoctorApp/Upload/${imageName}`;

const [WantedFile , setWantedFile]=useState('');
const path = 'C:/Users/Pc/Desktop/DoctorApp/Upload/';
const [source, setsource] = useState(false);

const [isModalVisible2, setIsModalVisible2] = useState(false);
const toggleModal2 = () => {setIsModalVisible2(!isModalVisible2);}
const handlePress = (text) => {toggleModal2();
  setWantedFile(text);

//const source = require();

  console.log(path + WantedFile);
}
    ///////

    const infos = {
        id_nurse:route.params.id_nurse,
        email_nurse : route.params.email_nurse,
        nom_nurse:route.params.nom_nurse,
        prenom_nurse: route.params.prenom_nurse,
        telephone_nurse: route.params.telephone_nurse,  
        Grade_nurse:route.params.Grade_nurse,
        Address_nurse: route.params.Address_nurse,
        date_nurse:route.params.date_nurse
    
    };
    
    
    //////
  


  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;


  const pic1 = `C:/Users/Pc/Desktop/DoctorApp/Upload/CIN_Recto_`+infos['nom_nurse']+`_`+infos['prenom_nurse']+`.jpg`;
useEffect(()=>{

  console.log();
},[]
)
  const Accepter = () => {
   
    fetch('http://'+host+'/dashboard/AccepterNurse.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_nurse:route.params.id_nurse,
        /*
        email_nurse : route.params.email_nurse,
        nom_nurse:route.params.nom_nurse,
        prenom_nurse: route.params.prenom_nurse,
        telephone_nurse: route.params.telephone_nurse,  
        Grade_nurse:route.params.Grade_nurse,
        Address_nurse: route.params.Address_nurse,
        date_nurse:route.params.date_nurse
        */
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        navigation.navigate('RedirectPageA');/*
        // Handle response from server
        if(data['success']){
          
            navigation.navigate('RedirectPageA');
        }else{alert('une erreur s est produite ');
       }
     */
        
      })
      .catch((error) => {
        // Handle registration error
        console.log(error);
        
      });
  
  };

  const Refuser = () => {
   
    fetch('http://'+host+'/dashboard/RefuserNurse.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_nurse:route.params.id_nurse,
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from server

            navigation.navigate('RedirectPageA');
   
     
        
      })
      .catch((error) => {
        // Handle registration error
        console.log(error);
        
      });
  
  };




  
  
  return (

      <View style={styles.container}>
  

        <View  >
        <Text style={{fontSize:30,marginLeft:screenWidth/20,fontWeight:'bold',marginTop:screenHeight/20}}>  N° Infirmer : {infos['id_nurse']} </Text>
  
  <View>
 
 
  <View style={[styles.secondBackground,{  height:410,marginTop:20 , width:screenWidth-10,marginLeft:5}]}>

<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold',paddingTop:20}}> informations d'infirmier ( inscription)  : </Text>
<View style={[{height:'70%',marginLeft:5,marginTop:20,padding:6 }]}>
<ScrollView style={{borderColor:'black',borderWidth:0,borderRadius:5,padding:10,marginBottom:-15,height:"50%"}}>

<Text style={{fontWeight:'bold',fontSize:14}}>Nom et prénom :</Text><Text> {infos['nom_nurse']} {infos['prenom_nurse']}</Text> 


  <Text style={{fontWeight:'bold',fontSize:14}}>Email :</Text><Text> { infos['email_nurse']}</Text> 
 
  <Text style={{fontWeight:'bold',fontSize:14}}>Numéro de telephone : </Text><Text>{infos['telephone_nurse']}</Text> 


  <Text style={{fontWeight:'bold',fontSize:14}}>Grade :</Text><Text> {infos['Grade_nurse']} </Text> 
  

  <Text style={{fontWeight:'bold',fontSize:14}}>Adresse : </Text><Text>{infos['Address_nurse']} </Text> 
 


  <Text style={{fontWeight:'bold',fontSize:14}}>Date demande  : </Text><Text>{infos['date_nurse']}</Text> 


 { 
 //<Image source={require('')} style={{width:400,height:300}}/>
}


  

  </ScrollView>

  


<View style={{flexDirection:'row',marginTop:20, justifyContent:'center'}}>
<TouchableOpacity style={[styles.button3,{margin:5}]} onPress={()=> Accepter()}>
            <Text style={styles.buttonText}>Accepter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button4,{margin:5}]} onPress={()=> Refuser()}>
            <Text style={styles.buttonText}>Refuser </Text>
          </TouchableOpacity>

        </View>
 </View>
 </View>
 </View>






<View style={[styles.footer,{justifyContent:"space-between",marginTop:10,paddingHorizontal:100}]}>

<TouchableOpacity style={{ marginLeft:screenWidth/6.5 }} onPress={() => navigation.navigate('Admin')}>
    <Image source={home} style={{ width: screenWidth / 10, height: screenHeight / 24 }} />
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

export default RequestsAdmin;
