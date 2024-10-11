import React, { useState } from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity ,Image,Dimensions,Alert } from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/home2.png';
import {host} from '../Variables';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
alignItems:'center',
    width:"100%",
  
    height:"100%",
    backgroundColor:'#fffff'
    

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
    paddingTop:40
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

export default function RegisterP({navigation}) {

  const Server = host;
  const [ ShowLoading , setShowLoading]=useState(false);

  const [slideIndex, setSlideIndex] = useState(1);
  // variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  // variables
  const [name, setName] = useState('');

  const [Success , setSuccess]=useState('');
  //variables
const [telephone_patient, settelephone_patient]=useState('');
const [Adresse ,setAdresse]=useState('');
  const [prenom, setPrenom] = useState('');
  const [date, setdate] = useState('');
 // const [flagVerso, setflagVerso] = useState(false);
 // const [flagRecto, setflagRecto] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,}$/;
 // const [CIN , setCIN]= useState('');



  ////
  // const takePicture = async (num,name) => {
  //   let result = await ImagePicker.launchCameraAsync({
  //     allowsEditing: false,
  //     aspect: [4, 3],
  //   });

  //   if (!result.canceled && num===1) {
  //     console.log('hani 1');
  //     let fileInfo = {
  //       uri: result.assets[0].uri,
  //       type: 'image/jpeg',
  //       name: 'CIN_Recto_'+name+'.jpg',
  //     };
  //    uploadFile(fileInfo);
  //   }

  //   if (!result.canceled && num===2) {
  //     let fileInfo = {
  //       uri: result.assets[0].uri,
  //       type: 'image/jpeg',
  //       name: 'CIN_Verso_'+name+'.jpg',
  //     };
  //    uploadFile(fileInfo);
  //   }

  //   if (!result.canceled && num===3) {
  //     let fileInfo = {
  //       uri: result.assets[0].uri,
  //       type: 'image/jpeg',
  //       name: 'Diplome_'+name+'.jpg',
  //     };
  //    uploadFile(fileInfo);
  //   }
  // };

//   const uploadFile = async (fileInfo) => {
//     let fileUri = fileInfo.uri;
//     let fileType = fileInfo.type;
//     let fileName = fileInfo.name;
  
//     let apiUrl = 'http://' + host + '/dashboard/UploadIamge.php';
//     let formData = new FormData();
//     formData.append('email', email);
//     formData.append('file', {
//       uri: fileUri,
//       type: fileType,
//       name: fileName,
//     });
  
//     try {
//       let response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         body: formData,
//       });
  
//       let responseJson = await response.json();
//       console.log(responseJson);

// if (responseJson.file_name.includes("CIN_Verso_")) {
//   setflagVerso(responseJson.success_file);
//   SavingImage();
// } else {
//   setflagRecto(responseJson.success_file);
//   SavingImage();
// }

 
//     } catch (error) {
//       console.error(error);
//     }
//   };
  


  ///
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


};
 


const handlePress = () => {

  if (name === '' || prenom === ''){Alert.alert('Attention','Veuillez vous remplir tous les champs ')
  }else{ setSlideIndex(slideIndex + 1);}
};
const handlePress5 = () => {

  if (Adresse === '' || telephone_patient === '' || date === ''){Alert.alert('Attention','Veuillez vous remplir tous les champs ')
  }else{ setSlideIndex(slideIndex + 1);}
};
  const handlePress2 = () => {
    setSlideIndex(slideIndex - 1);
  };



  
  // const SavingImage = () => {
  //   setShowLoading(true);
  //   setTimeout(() => {
  //     setShowLoading(false);
  
  //   }, 5000); // 3 seconds delay
  // }

 


  const handleDateInput = (text) => {
    let formattedDate = '';
    if (text.length === 2 && !text.includes('/')) {
      formattedDate = text + '/';
    } else if (text.length === 5 && !text.endsWith('/')) {
      formattedDate = text.slice(0, 2) + '/' + text.slice(3) + '/';
    } else {
      formattedDate = text;
    }
    setdate(formattedDate);
  };







  const finish = () => {

    console.log(email);
    console.log(Server);


    fetch("http://"+host+"/dashboard/RegisterPatient.PHP", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}
             &email=${email}
             &prenom=${prenom}
             &password=${password}
             &date=${date}
             &Adresse=${Adresse}
             &telephone_patient=${telephone_patient}`,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        if (data === "Registration made successfuly") {
          navigation.navigate('Login1');
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };
  return (
    <View style={[styles.container]}>

<TouchableOpacity  style={{marginTop:screenHeight/17}} onPress={() => navigation.navigate('Home1')}>
    <Image source={logo} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
      <View style={[styles.slide, { display: slideIndex === 1 ? 'flex' : 'none' }]}>

      <View style={[styles.secondBackground,{  height: 400}]}>
        
    
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
{/* 
<Text style={{marginLeft:20, fontSize:20,fontWeight:'bold'}}>Votre CIN:  </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Votre CIN"
          value={CIN}
          onChangeText={setCIN}
          required={true}
          
        />
        </View> */}
        
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
      <View style={[styles.secondBackground,,{  height: 400}]}>
        
    
<Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}>Adresse Domicile :  </Text>
<View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Votre Adresse Professionnelle "
         value={Adresse}
          required={true}
        onChangeText={setAdresse}
        /></View>

<Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}> Numéro de telephone  : </Text>
      <View style={styles.inputContainer}>
<TextInput
   placeholder="0X - XX -  XX - XX - XX "
   maxLength={10}
   keyboardType="numeric"
   value={telephone_patient}
  onChangeText={settelephone_patient}
  required={true}

/>
</View>
<Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}> Votre date de naissance  : </Text>
      <View style={styles.inputContainer}>
<TextInput
   placeholder="dd-mm-yyyy"
   maxLength={10}
   keyboardType="numeric"
   value={date}
   onChangeText={handleDateInput}
  required={true}

/></View>




<View style={{flex:1,flexDirection:'row',alignSelf:'center'}}>
<TouchableOpacity style={[styles.button2,{margin:10}]} onPress={handlePress2}>
            <Text style={styles.buttonText}>Revenir</Text>
          </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress5}>
            <Text style={styles.buttonText}>Confirmez </Text>
          </TouchableOpacity>

        
          </View>
          </View>
      </View>

      <View style={[styles.slide, { display: slideIndex === 4 ? 'flex' : 'none' }]}>
      <View style={[styles.secondBackground,,{  height: 400}]}>
        
      {ShowLoading && <Image  style={{position:'absolute', zIndex:1,width:"100%",height:"70%",alignSelf:'center',marginTop:10}} source={require('../../loading.gif')} />}


{/* <Text style={{marginLeft:20, fontSize:15,fontWeight:'bold'}}>Vérification documents :  </Text>
<TouchableOpacity  disabled={flagRecto} style={[styles.button2,{margin:10}]} onPress={()=> takePicture(1,name+"_"+prenom)}>
            <Text style={styles.buttonText}>Prendre photo CIN Recto </Text>
            {flagRecto && <Text> Bien Enregistré</Text>}
          </TouchableOpacity>

          <TouchableOpacity disabled={flagVerso} style={[styles.button2,{margin:10}]} onPress={() => takePicture(2,name+"_"+prenom)}>
            <Text style={styles.buttonText}>Prendre photo CIN Verso  </Text>
            {flagVerso && <Text> Bien Enregistré</Text>}
          </TouchableOpacity> */}
          



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
