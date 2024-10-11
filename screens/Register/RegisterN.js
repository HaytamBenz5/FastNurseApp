import React, { useState } from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity ,Image,Dimensions,Alert  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/home2.png';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import {host} from '../Variables';
const styles = StyleSheet.create({
  container: {
    flex: 1,
alignItems:'center',
    width:"100%",
  
    height:"100%",
    backgroundColor:'#ffffff'
    

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
  padding:Dimensions.get('screen').height/30,
  
    width:"100%",
    
    
  },

  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    width: '50%',
  },
  input: {
    height: 30,
    width:251
  },
  slide: {
    flex: 1,
    paddingTop:20,
    
  },
  button: {
    padding: 10,
    width:150,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
  alignSelf:'center'
  },
  button2: {
    padding: 10,
    width:120,
    backgroundColor: '#0A6CFF',
    borderRadius: 20,
  alignSelf:'center'
  },
  buttonText: {
    color: 'white',
    alignSelf:'center',
    fontWeight: 'bold', 
  },
});

export default function RegisterN({navigation}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');

const [telephone_nurse,settelephone_nurse]=useState('');
  const [prenom, setPrenom] = useState('');
  const [date, setdate] = useState('');
  const [Adresse, setAdresse] = useState('');
  const [CIN , setCIN]=useState('');
  const [selectedValue, setSelectedValue] = useState('Votre Grade');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,}$/;


  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

const handlePress3 = () => {


  if (password===password2 && isValidEmail(email) ){
setSlideIndex(slideIndex+1);
  }
  else if(password!=password2 ){Alert.alert('Attention',' Passwords are not the same')}
  else if(isValidEmail(email)===false){Alert.alert('Attention','the email  is invalid ')}
  else{Alert.alert('Attention','the email  is invalid ')}


};
 


const handlePress = () => {

  if (name === '' || prenom==='' || CIN ===''){Alert.alert('Attention','veuillez vous Remplir tous les champs ')
  }else{ setSlideIndex(slideIndex + 1);}
};
const handlePress5 = () => {

  if (telephone_nurse === '' ||Adresse===''){Alert.alert('Attention','Veuillez vous remplir tous les champs ');
  }else{ finish}
};
  const handlePress2 = () => {
    setSlideIndex(slideIndex - 1);

  };






  const finish = () => {
/*
    console.log(email);

    console.log(name);

    console.log(CIN);

   
    console.log(password);

    console.log(Adresse);
    console.log(selectedValue);

 */

    
    
    fetch('http://'+host+'/dashboard/RegisterN.PHP', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CIN:CIN,
        nom:name,
        email: email,
        password: password,
        Adresse:Adresse,
        telephone_nurse:telephone_nurse,
        Grade:selectedValue,
        prenom:prenom,
  
      
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Handle response from server
        console.log(responseJson);
       Alert.alert('Inscription est faite avec succès ','Vous devez attendre la validation de votre inscription , Merci ');
       setEmail('');
       setPassword('');
       setPassword2('');
       setSlideIndex(1);
       setdate('');
       setName('');

       setPrenom('');

        navigation.navigate('Login1');

      })
      .catch((error) => {
        // Handle registration error
        console.log(error);
        alert('the email already in use  ')
      });
  
  };
  return (
    <View style={[styles.container]}>

<TouchableOpacity  style={{marginTop:screenHeight/17,color:'black'}} onPress={() => navigation.navigate('Home1')}>
    <Image source={logo} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
   
    <View style={[styles.slide, { display: slideIndex === 1 ? 'flex' : 'none' }]}>
<View style={[styles.secondBackground,{  height: 420}]}>
  
  


<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold'}}>Votre Nom </Text>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="Votre nom"
    value={name}
    onChangeText={setName}
    required={true}
    
  /></View>

<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold'}}>Votre Prenom:  </Text>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="Votre Prenom"
    value={prenom}
    onChangeText={setPrenom}
    required={true}
    
  /></View>
  <Text style={{marginLeft:20, fontSize:20,fontWeight:'bold'}}>Votre CIN:  </Text>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="Votre Prenom"
    value={CIN}
    onChangeText={setCIN}
    required={true}
    
  /></View>
  
  <TouchableOpacity style={styles.button} onPress={handlePress}>
    <Text style={styles.buttonText}>Continuer</Text>
  </TouchableOpacity>
   
  </View>




    


      </View>
      <View style={[styles.slide, { display: slideIndex === 2 ? 'flex' : 'none' }]}>




      <View style={[styles.secondBackground,{  height: 400}]}>
        
        

        

      <Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}>Email : </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Votre Email"
          value={email}
          onChangeText={setEmail}
          required={true}
        /></View>
<Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}>Mot de passe : </Text>
<View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Votre mot de passe"
          secureTextEntry={true}
          value={password}
          required={true}
          onChangeText={setPassword}
        /></View>
  <Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}> Confirmez Mot de passe : </Text>

<View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Confirmez votre mot de passe"
          value={password2}
          secureTextEntry={true}
          onChangeText={setPassword2}
          required={true}
        /></View>
<View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:10}]} onPress={handlePress2}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress3}>
            <Text style={styles.buttonText}>Continuer </Text>
          </TouchableOpacity>

        
          </View></View>

          





      </View>

      <View style={[styles.slide, { display: slideIndex === 3 ? 'flex' : 'none' }]}>
      <View style={[styles.secondBackground,{  height: 380}]}>
        
      <Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}>Adresse Professionnelle :  </Text>
<View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Votre Adresse Professionnelle "
          value={Adresse}
          required={true}
          onChangeText={setAdresse}
        /></View>

<View>
<Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}> Votre Grade  : </Text>
<Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >

        <Picker.Item label="Polyvalent" value="Polyvalent" />
        <Picker.Item label="Auxiliaire" value="Auxiliaire" />
        <Picker.Item label="Croissant rouge" value="Croissant rouge" />
        <Picker.Item label="Ambulancier" value="Ambulancier" />
        <Picker.Item label="Reducation" value="Reducation" />
        <Picker.Item label="Aide soignant" value="Aide soignant" />

      </Picker>
    </View>

    <Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}> Numéro de telephone  : </Text>
      <View style={styles.inputContainer}>
<TextInput
   placeholder="0X - XX -  XX - XX - XX "
   maxLength={10}
   keyboardType="numeric"
   value={telephone_nurse}
   onChangeText={settelephone_nurse}
  required={true}

/>
</View>



<View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:10}]} onPress={handlePress2}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={finish}>
            <Text style={styles.buttonText}>Confirmez </Text>
          </TouchableOpacity>

        
          </View>
          </View>
      </View>

    


    </View>

  );
}
