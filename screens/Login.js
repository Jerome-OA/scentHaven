import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Login({navigation}) {
  return (

    
    <View style={styles.container}>
        <View style={styles.login}>
          <View style={styles.sign}>
            <Text style={styles.signIn}>Login</Text>
          </View>
            <Text style={styles.email}>Email</Text>
            <TextInput placeholder='eg. michelle12@gmail.com' style={styles.mail}/>
            <Text style={styles.password} >Password</Text>
            <TextInput secureTextEntry= {true} placeholder='password' style={styles.mail}/>
        
        </View>
        
        <TouchableOpacity  onPress={() => {navigation.navigate ('Home')}}>
         <View style={styles.button}>
            <Text style={styles.butt}>Login</Text>
         </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.apple}>
          <AntDesign name="apple1" size={24} color="black" />
          <Text>    Sign in with Apple</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View style={styles.apple}>
        <AntDesign name="facebook-square" size={24} color="black" />
        <Text>   Sign in with Facebook</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View style={styles.apple}>
        <AntDesign name="google" size={24} color="black" />
        <Text>   Sign in with Google</Text>
        </View>
        </TouchableOpacity>


        <View style={styles.dont}>

         <Text> Dont have an account? 
           <TouchableOpacity  onPress={() => {navigation.navigate('SignUp')}}>
            <Text>   Sign up</Text>
            </TouchableOpacity>
            </Text>
        </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    margin:15,
    marginTop:40,
    marginBottom:20,
    borderRadius:70,
  },

  

  login:{
   
    marginTop:100,
    marginHorizontal:'10%',
  },

  sign:{
    alignItems: 'center',
  },

  signIn:{
    fontSize:50,
    marginBottom:'20%',
    
    
  },

  email:{
    fontSize: 20,
    paddingBottom:5,
    paddingLeft:5,
  },

  mail:{
    borderWidth:1,
    height:'13%',
    borderRadius:15,
    backgroundColor:'white',
    paddingLeft:15,
    fontSize:25,
    
    
  },

  password:{
    fontSize:20,
    paddingTop: 30,
    paddingLeft:5,
    
  },


  button:{
    marginHorizontal: '30%',
    alignItems:'center',
    height:40,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'black',
    padding:10,
  },

  butt:{
    fontSize: 15,
    alignItems:'center',
    color:'white',
  },

  apple:{
    width:'60%',
    height:35,
    borderWidth:1, 
    borderRadius:20,
    marginTop:30,
    flexDirection:'row',
    alignItems: 'center',
    alignSelf:'center',
    paddingHorizontal:'9%',
  },
 
  dont:{
    flexDirection:'row',
    alignItems: 'center',
    alignSelf:'center',
    marginTop:20,
  },
  

  


});
