import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcmZ1bWVzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" };


export default function Welcome({navigation}) {
  return (
    
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.backgroundColor}>
            <View style={styles.scenthaven}>
              <Text style={styles.scent}>
                SCENT
              </Text>
              <Text style={styles.haven}>
                HAVEN
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={styles.opac}>
                <Text style={styles.started}> 
                  Shop Now
                  <AntDesign name="right" size={30} color="#F8F8FF" />
                  <AntDesign name="right" size={30} color="#DCDCDC" />
                  <AntDesign name="right" size={30} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
            
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backgroundColor:{
  flex: 1,
  },

  started:{
    
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    flexDirection:'row',
    
  },
   
  opac:{
    alignItems:'center',
    marginTop: '120%',
    
  },

  scenthaven:{
    alignItems:'center',
    marginTop: 150,
  },

  scent:{
    fontSize:40,
    color:'white',

  },

  haven:{
    fontSize:70,
    color:'white',
    
  },
});
