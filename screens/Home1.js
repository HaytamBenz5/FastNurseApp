import React , { useState }from 'react';
import { View, Text, StyleSheet,Button,Modal, TouchableOpacity,Dimensions,Image ,ImageBackground} from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/help.png';
import n1 from 'C:/Users/Pc/Desktop/DoctorApp/tt.png';
import {Picker} from '@react-native-picker/picker';


  
const Home1 = ({navigation}) => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {setIsModalVisible(!isModalVisible);}
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const toggleModal2 = () => {setIsModalVisible2(!isModalVisible2);}
  const [langue, setlangue] = useState('Francais');

  
  return (


      <View style={styles.container}>

<View> 
  
        <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{marginLeft:  5}}>
                FastNurse Services est une application mobile médicale qui offre une variété de fonctionnalités pour aider les utilisateurs à gérer leur santé de manière efficace.
                
                {"\n"}
                 L'application est conçue pour fournir des services de santé pratiques et fiables à tout moment et en tout lieu. Elle est disponible sur les plateformes iOS et Android.
                 {"\n"}
L'application offre une variété de fonctionnalités pour aider les utilisateurs à gérer leur santé. Les utilisateurs peuvent suivre leur état de santé général, leur taux de glycémie, leur pression artérielle et leur poids. Les utilisateurs peuvent également suivre les médicaments qu'ils prennent, les rendez-vous chez le médecin et les résultats de laboratoire.

{"\n"}
Fast nurse  offre également un accès facile à des professionnels de la santé qualifiés. Les utilisateurs peuvent prendre rendez-vous avec des médecins et des infirmières, consulter des spécialistes en santé mentale et obtenir des conseils de nutritionnistes. Les professionnels de la santé sont disponibles 24 heures sur 24 et 7 jours sur 7.

L'application est également équipée d'un système de notification intelligent pour aider les utilisateurs à prendre leurs médicaments à temps et à respecter leur plan de traitement. Les utilisateurs peuvent configurer des rappels pour les rendez-vous chez le médecin et les tests de laboratoire.


          </Text>
          <Button
            title="Close"
            onPress={toggleModal}
          />
        </View>
      </Modal>
    </View>

    <View> 
  
        <Modal
        visible={isModalVisible2}
        animationType="slide"
        onRequestClose={toggleModal2}
      >
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{marginLeft:  5, fontWeight:'bold', fontSize:26}}> Choix de la langue</Text>
         
         
           
        </View>
        <View><Picker
        style={{width:"50%",marginBottom:60,marginLeft:100}}
        
        selectedValue={langue}
        onValueChange={(itemValue) => setlangue(itemValue)}
      >
        <Picker.Item label="Francais" value="fr" />
        <Picker.Item label="Arabe" value="ar" />
        
      </Picker>
      
      <TouchableOpacity style={[styles.button2,{marginBottom:300}]}  onPress={toggleModal2}>
            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20,color:'white'}}>Fermer</Text>
          </TouchableOpacity>

    
          </View>
      
        
      </Modal>
    </View>



<ImageBackground source={require('C:/Users/Pc/Desktop/DoctorApp/bj1.jpg')} style={styles.bgimg} >


      
<Text style={styles.text}>Bienvenue sur    </Text>

<Text style={{ fontSize: 50,fontWeight: 'bold',color: '#FFF',marginLeft:screenWidth/3.6}}>Fast Nurse   </Text>

      

      <TouchableOpacity  style={styles.buttonContainer} onPress={()=> navigation.navigate('Login1')}>
      <View style={styles.button}>
      <Text style={styles.buttonText}>       S'indentifier         </Text>
      </View>
    </TouchableOpacity>
    <Text style={[styles.buttonText,{marginLeft:screenWidth/3.5,marginTop:10}]}>       Casablanca-settat        </Text>

    <TouchableOpacity  style={{marginLeft:screenWidth/1.2001,marginTop:50}} onPress={toggleModal}>
    <Image source={logo} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>

    <TouchableOpacity  style={{marginLeft:screenWidth/14,marginTop:screenHeight/1.14,position:'absolute'}} onPress={toggleModal2}>
    <Image source={n1} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
  




      
      </ImageBackground>

    </View>



    
  );
};

const styles = StyleSheet.create({
  bgimg:{

    width: "100%",
height:"100%"

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width:"100%",
    alignItems:'center',
    height:Dimensions.get('screen').width
  },
  firstBackground: {
    width:"25%",
    backgroundColor: '#FFC107',
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
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

    marginLeft: "13%",
    marginTop: "40%",
    height: "60%",
    width:"75%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  marginTop:Dimensions.get('screen').height/10,
  marginLeft:Dimensions.get('screen').width/5.5,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF',
    
  },


  shadow: {
   
    },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: Dimensions.get('screen').height/3,

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center',
    marginLeft:5
  },
  button2: {
    padding: 10,
    width:120,
    backgroundColor: '#0B8FC7',
    borderRadius: 20,
  alignSelf:'center'
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
    marginTop:100,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default Home1;
