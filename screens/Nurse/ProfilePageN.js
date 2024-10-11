import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

const UserProfile =({navigation}) => {

  const[first_name, setFirst_name] = useState('');
  const[last_name, setLast_name] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[grade, setGrade] = useState('');
  const[address, setAddress] = useState('');


  useEffect(() => {(async () => {
/*

    try {

      const response = await fetch("http://192.168.15.100/DoctorApp/GetProfile.php",{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({role : role, user_id : user_id}),
      });
      const data = await response.json();
      console.log(data);
      setFirst_name(data.first_name);
      setLast_name(data.last_name);
      setEmail(data.email);
      setPhone(data.phone);
      setGrade(data.grade);
      setAddress(data.address);
      

      
    } catch (error) {
      console.log(error);
    }
*/
})();

}, []);

//displaying the appropriate data for the appropriate user
    
    return (
    
    
      <View style={{height: screenHeight, width:screenWidth}}>
  
  <ScrollView style={{ flex: 1 }}>
  
  <View style={{height: screenHeight/7.5, backgroundColor: 'white', width:screenWidth}}>
  
  <View style={{top:screenHeight/15, left:screenWidth/28}}>
    <Text style={{color: 'black', fontSize:20, fontWeight: 'bold',borderBottomWidth: screenWidth/100,
    borderBottomColor: 'rgb(0, 247, 255)',
    paddingBottom: screenWidth/50, marginRight:screenWidth/1.8}}>Personal Profile
    </Text>
  </View>
  
  <View style={{bottom:screenHeight/180, left:screenWidth/28}}>
      <Icon name='user' size={20} color={'black'}></Icon>
  </View>
  
  <View style={{top:screenHeight/15, left:screenWidth/8}} >
  <TouchableOpacity onPress={() => navigation.navigate('EditInfo')}>
      <Text style={{ backgroundColor:'rgb(204, 255, 255)', flex:0, color: 'black', fontSize:20, fontWeight: 'medium',borderWidth: 2,
      borderColor: 'rgb(0, 247, 255)',borderRadius:100/2, bottom:50, marginRight:screenWidth/1.5, paddingLeft: screenWidth/25, left:screenWidth/2}}>
      <Icon name='pen' size={20} color={'black'}></Icon> Edit Info</Text>
  </TouchableOpacity>
  </View>
  
  <View style={{bottom:screenWidth/12, left:screenWidth/2.4}}>
      <Icon name='stethoscope' size={20} color={'black'}></Icon>
      </View>
  
  </View>
  
  <ImageBackground
      source={require('./Patient_Pages/img/CoverProf2.jpg')}
      style={{flex:0.4, height:screenHeight/4}}
      resizeMode={'cover'}
      >
  
  <View style={{top:screenHeight/6, left:screenWidth/1.2}}>
  <TouchableOpacity onPress={() => navigation.navigate('Cover')}>
  
  <Icon name='pen' size={20} style={{backgroundColor:'rgb(204, 255, 255)', borderWidth: 2.5,
      borderColor: 'rgb(0, 247, 255)', height:38, width:38, borderRadius:100, marginRight:screenHeight/10, paddingTop:screenWidth/50, paddingLeft: screenWidth/40,}} color={'black'}></Icon>
  
  </TouchableOpacity>
  </View>
  
    <View style={{flex:0.4, height:screenHeight/4}}></View>
    </ImageBackground>
    
  
  
    <View style={{top:screenHeight/90, alignItems: 'center',justifyContent: 'center',}}>
    <Image
        source={require('./1645869692985.jpeg')}
        style={{ width: 160, height: 160, bottom:screenHeight/8, borderRadius: 100 ,borderWidth:3, borderColor: 'rgb(0, 247, 255)' }}
      />
  
  <View style={{bottom:screenHeight/5, right:screenWidth/16}}>
  <TouchableOpacity onPress={() => navigation.navigate('Prof')}>
  <Icon name='pen' size={20} style={{backgroundColor:'rgb(204, 255, 255)' ,borderWidth: 2,
      borderColor: 'rgb(0, 247, 255)', height:38, width:38, borderRadius:100, marginRight:screenHeight/10, paddingTop:screenWidth/50, paddingLeft: screenWidth/40,}} color={'black'}></Icon>
  </TouchableOpacity>
  </View>
  
      </View>
  
      <View style={{bottom:screenHeight/7}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
      {first_name} {last_name}
        </Text>
        <Text style={{textAlign: 'center', fontSize:15}}>
          Infermier {grade}
        </Text>
      </View>
  
  
      <View style={{right:screenWidth/5.5, bottom:screenHeight/15}}>
       <Text style={{borderBottomColor:'black', borderBottomWidth:3,
        fontWeight: 'bold', fontSize:17, marginLeft:screenWidth/4, marginRight:screenWidth/3.5,}}>Personal Informations :
        </Text>
       </View> 
  
      <View style={{height:screenHeight, flex:1, flexDirection: 'column', width:screenWidth}}>
  
      <Icon name="envelope" style={{ left:screenWidth/10}} size={22} color={'black'}/>
    
      <Icon name="phone" style={{top:screenWidth/1.3, right:screenWidth/2.7, transform: [{ rotate: '90deg'}]}} size={22} color={'black'}/>
  
      <Icon name="address-book" style={{top:screenWidth/1.65, left:screenWidth/10}} size={22} color={'black'}/>
     
      <Icon name="map-pin" style={{top:screenWidth/1.05, left:screenWidth/10}} size={22} color={'black'}/> 
       
       <Text style={{ borderBottomColor:'black', borderBottomWidth:3, marginRight:screenWidth/1.2, fontSize:18, fontWeight:'bold', bottom:screenWidth/4.12, left:screenWidth/5.5}}>Email :</Text>
  
       <Text style={{ borderBottomColor:'black', borderBottomWidth:3, marginRight:screenWidth/1.2, fontSize:18, fontWeight:'bold',top:screenHeight/40, left:screenWidth/5.5}}>Phone :</Text>
  
       <Text style={{ borderBottomColor:'black', borderBottomWidth:3, marginRight:screenWidth/1.2, fontSize:18, fontWeight:'bold',top:screenWidth/2.9, left:screenWidth/5.5}}>Grade :</Text>
  
       <Text style={{ borderBottomColor:'black', borderBottomWidth:3, marginRight:screenWidth/1.3, fontSize:18, fontWeight:'bold',top:screenWidth/1.48, left:screenWidth/5.5}}>Address :</Text>
  
       <Text style={{bottom:screenWidth/3, left:screenWidth/8, fontWeight:'bold', color:'grey'}}>• {email}</Text>
  
       <Text style={{bottom:screenWidth/50, left:screenWidth/8, fontWeight:'bold', color:'grey'}}>• {phone}</Text>
  
       <Text style={{top:screenWidth/3.2, left:screenWidth/8, fontWeight:'bold', color:'grey'}}>• {grade}</Text>
       <Text style={{top:screenWidth/1.5, left:screenWidth/8, fontWeight:'bold', color:'grey'}}>• {address}</Text>
  
  <View style={{alignItems: 'center', top:screenHeight/1.8}}>
  <TouchableOpacity onPress={HandleLogout}>
    <Text style={{fontSize:16, fontWeight:'bold', color:'rgb(0, 247, 255)', borderBottomWidth:2, borderBottomColor:'rgb(0, 247, 255)'}}>LOG OUT</Text>
  </TouchableOpacity>
  </View>
  
      </View>
  </ScrollView>
      </View>
      
      );

  
};

export default UserProfile;
