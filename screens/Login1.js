import React , { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,ImageBackground,Dimensions} from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/home.png';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import {host} from './Variables';


const Login1 = ({navigation,route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

// Pour verifier si les données appartiennent à la table d'infirmier
  const check2 = () => {
    fetch('http://'+host+'/dashboard/ApiLoginN.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from server
        console.log(data.email_nurse);
        if(data['Flag']){
        const infos = {
          id_nurse:data['id_nurse'],
          email_nurse : data['email_nurse'],
          nom_nurse:data['nom_nurse'],
          prenom_nurse: data['prenom_nurse'],
          telephone_nurse: data['telephone_nurse'],  
          Grade_nurse:data['Grade_nurse'],
          Address_nurse: data['Address_nurse'],
          tcktId:'TicketId',
          nextpage:'Nurse'
        
        };
       navigation.navigate('RedirectPageN',{infos});
        setEmail('');
        setPassword('');
      
      }
        else{
         check3();

        }
        
      })
      .catch((error) => {
        // Handle registration error
        console.log(error);
        
      });
  
  };
// Pour verifier si les données appartiennent à la table Admin
  const check3 = () => {
    fetch('http://'+host+'/dashboard/ApiLoginA.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from server
        console.log(data);
        if(data['Flag']){alert("Bonjour  Administrateur ");
        navigation.navigate('RedirectPageA');
       
        setEmail('');
        setPassword('');
      
      }
        else{
          alert('Identifiants incorrects ');

        }
        
      })
      .catch((error) => {
        // Handle registration error
        console.log(error);
        
      });
  
  };


// Pour verifier si les données appartiennent à la table de patient
    const check = () => {
      fetch('http://'+host+'/dashboard/ApiLogin.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle response from server
         // console.log("hadi",data.adresse_patient);
          if(data['Flag']){
          const infos = {
            id_patient:data['id_patient'],
            email_patient : data['email_patient'],
            nom_patient:data['nom_patient'],
            prenom_patient: data['prenom_patient'],
            telephone_patient: data['telephone_patient'],
            adresse_patient:data.adresse_patient,
            nextpage:'Patient'
          };

          navigation.navigate('RedirectPageP',{infos});
          setEmail('');
          setPassword('');
          }
          else{
          check2();
        
          }
          
        })
        .catch((error) => {
          // Handle registration error
          console.log(error);
          
        });
    
    };


  return (
    

    <View style={styles.container}>

<ImageBackground source={require('C:/Users/Pc/Desktop/DoctorApp/bj1.jpg')} style={styles.bgimg} >
<TouchableOpacity  style={{marginTop:screenHeight/10,marginLeft:150}} onPress={() => navigation.navigate('Home1')}>
    <Image source={logo} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
      <View style={styles.secondBackground}>

      <Text style={{marginLeft:20}}>Email : </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrer votre  Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={{marginLeft:20}}>Mot de passe : </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrer votre  Mot de passe"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity  style={styles.buttonContainer} onPress={check}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Connexion </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
    <Text style={{alignSelf:'center',marginTop:15}}>Vous n'avez pas de compte ? Enregistrer </Text>
    </TouchableOpacity>
       
            </View>
  

    </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({

    inputContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 10,
        width: '90%',
      },
      input: {
        height: 30,
      },


   
  bgimg:{

    width: "100%"
    

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
height: Dimensions.get('screen').height,

    
  },
 
  secondBackground: {

    
    shadowColor: "#000",
    shadowOffset: {
	  
    },
    shadowOpacity: 1,
    shadowRadius: 7.0,

    elevation: 9,
  backgroundColor: "white",
    borderRadius: 25,
  alignSelf:'center',
  marginTop:  Dimensions.get('screen').height/20,
  padding:Dimensions.get('screen').height/22,
    height: 320,
    width:"95%",
    
    
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    
  },

});
export default Login1;
