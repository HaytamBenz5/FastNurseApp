import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Image ,ImageBackground} from 'react-native';
import logo from 'C:/Users/Pc/Desktop/DoctorApp/logo.png';
  
const Reg = ({navigation}) => {
  
  
  return (


      <View style={styles.container}>



      <View style={styles.secondBackground}>
   

      <Text style={styles.text}>Vous etes un patient ou un infirmier ? </Text>

      <TouchableOpacity  style={styles.buttonContainer}   onPress={() => navigation.navigate('RegisterP')}
>
      <View style={styles.button}>
        <Text style={styles.buttonText}>        Je suis un Patient            </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  style={styles.buttonContainer} onPress={() => navigation.navigate('RegisterN')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>        Je suis un infirmier        </Text>
      </View>
    </TouchableOpacity>
  





      </View>
  

    </View>



    
  );
};

const styles = StyleSheet.create({
  bgimg:{

    width: "100%"


  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'#fffff'
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

    marginLeft: "5%",
    marginTop: "40%",
    height: "30%",
    width:"90%",
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default Reg;
