import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { Ionicons, AntDesign, Entypo, Feather } from '@expo/vector-icons';



export default function ProdDetails({navigation, route}) {

    const item =route.params;

  return (
    <View style={styles.container}>
    <View style={styles.detail}>
        <Image style={styles.images} source={{uri: item.img}} />
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.price}> {item.price} </Text>
        <Text style={styles.about}> {item.about} </Text>


    </View>
    <TouchableOpacity  >
         <View style={styles.button}>
         <Entypo name="plus" size={24} color="white" />
            <Text style={styles.butt}>Add to Cart</Text>
         </View>
        </TouchableOpacity>
    <View style={styles.bottombar}>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <AntDesign name="home" size={30} color="#A9A9A9" />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Feather name="heart" size={30} color="#A9A9A9" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
                    <Feather name="shopping-bag" size={30} color="#A9A9A9" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Profile')}} >
                    <Ionicons name="person-outline" size={33} color="#A9A9A9" />
                </TouchableOpacity>
                </View>

                

    <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },

    detail:{
        paddingHorizontal:20,
        paddingTop:110,
    },

    images:{
        width:'80%',
        height:'60%',
        alignSelf:'center',
    },
    
    title:{
        paddingTop:30,
        paddingBottom:10,
        fontSize:25,
    },

    price:{
        paddingBottom:10,
        fontSize:20,
    },

    about:{
        fontSize:15,
    },

  button:{
    justifyContent:'space-evenly',
    flexDirection:'row',
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


bottombar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 20,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 15,
  paddingVertical: 10,
}
  });