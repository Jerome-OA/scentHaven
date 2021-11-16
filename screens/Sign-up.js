import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  Text, TouchableOpacity, TextInput, View } from 'react-native';

export default function SignUp({navigation}) {
  return ( 
    <View style={styles.container}>
      <View style={styles.login}>
          <View style={styles.sign}>
            <Text style={styles.signIn}>Sign Up</Text>
          </View>
            <Text style={styles.fn}>First Name</Text>
            <TextInput placeholder='eg. James' style={styles.mail}/>
            <Text style={styles.ln} >Last Name</Text>
            <TextInput placeholder='eg. Jones' style={styles.mail}/>
            <Text style={styles.email}>Email</Text>
            <TextInput placeholder='eg. michelle12@gmail.com' style={styles.mail}/>
            <Text style={styles.password} >Password</Text>
            <TextInput secureTextEntry={true} placeholder='password' style={styles.mail}/>
        
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}} >
         <View style={styles.button}>
            <Text style={styles.butt}>Sign Up</Text>
         </View>
        </TouchableOpacity>

        <View style={styles.log}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.logg} >Log in</Text>
        </TouchableOpacity>
        </View>

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

  fn:{
    fontSize: 20,
    paddingBottom:5,
    paddingLeft:5,
  },

  mail:{
    borderWidth:1,
    height:'8%',
    borderRadius:15,
    backgroundColor:'white',
    paddingLeft:15,
    marginBottom:'5%',
    
    
  },

  ln:{
    fontSize:20,
    paddingBottom:5,
    paddingLeft:5,
},

  email:{
      fontSize:20,
      paddingBottom:5,
      paddingLeft:5,
  },

  password:{
    fontSize:20,
    paddingBottom:5,
    paddingLeft:5,

  },

  button:{
    marginHorizontal: '30%',
    alignItems:'center',
    height:40,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'black',
    padding:'3%',
    marginTop:'15%',
  },

  butt:{
    fontSize: 15,
    alignItems:'center',
    color:'white',
  },

  log:{
      flexDirection:'row', 
      marginTop:'5%',
      marginLeft:'15%',
      alignItems:'center',
  },

  logg:{
      paddingLeft:5,
  },
    
 
});
