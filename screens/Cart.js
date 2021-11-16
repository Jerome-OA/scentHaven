import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions,Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Cart({navigation}) {
  
  return ( 
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.heading}>
                <Entypo style={styles.cart} name="shopping-cart" size={24} color="black" />
                <Text style={styles.shopping}>Shopping Cart</Text>
            </View>
        </View>
        <View style={styles.footer}>


        </View>
      <StatusBar style="auto" />
    </View>
  );
}


const {height} = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },

  header: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',

  },
    
  footer: {
      flex:4,
      backgroundColor:"#fff",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingHorizontal:30,
      paddingVertical:50,
  },

  cart:{
      fontSize:30,
      
  },

  shopping:{
      fontSize:30,
  },

  heading:{
    flexDirection:'row',
    marginTop:'15%',
  },

  

});
