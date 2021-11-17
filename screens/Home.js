import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView,  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons, Entypo, AntDesign,  Feather } from '@expo/vector-icons';
import { male } from '../pictures/Images';
import { female } from '../pictures/Images';



export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="settings" size={24} color="black" />
            </TouchableOpacity>    

                <View style={styles.search}>
                        <AntDesign style={styles.icon} name="search1" size={24} color="black" />

                    <TextInput style={styles.searching} placeholder='Search...'/>
                </View>
            
            <TouchableOpacity onPress={() => {navigation.navigate('Cart')}} >
                <Entypo style={styles.cart} name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>

        </View>
        <View style={styles.select}>
            <TouchableOpacity >
                <Text style={styles.opt}>All</Text>
            </TouchableOpacity>    

            <TouchableOpacity onPress={() => {navigation.navigate('Males')}}>
                <Text style={styles.opt}>Men</Text>
            </TouchableOpacity>  

             <TouchableOpacity onPress={() => {navigation.navigate('Females')}}>
                <Text style={styles.opt}>Women</Text>
            </TouchableOpacity>    
        </View>

        <ScrollView >
            <View>
            {male.map((item) => {
                    return ( 
                       <TouchableWithoutFeedback onPress={() => {
                           navigation.navigate('ProdDetails', item)
                       }}>
                            <View style={styles.imageViews}>
                                <Image style={styles.images} source={{uri: item.img}} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}

                {female.map((item) => {
                    return ( 
                        <TouchableWithoutFeedback onPress={() => {
                            navigation.navigate('ProdDetails', item)
                        }}>
                        <View style={styles.imageViews}>
                            <Image style={styles.images} source={{uri: item.img}} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                        </TouchableWithoutFeedback>
                        
                    );
                })}
            </View>           
        </ScrollView>
        <View style={styles.bottombar}>
        <TouchableOpacity  >
                    <AntDesign name="home" size={30} color= "#A9A9A9" />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Feather name="heart" size={30} color="#A9A9A9" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Cart')}} >
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
    flex:1,
    backgroundColor:'#fff',
  },

  header:{
    flexDirection: 'row',
    height:90,
    paddingTop:38,
    backgroundColor:'gainsboro',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    
  },

  search:{
      borderWidth:1,
      borderRadius:25,
      flexDirection:'row',
      alignSelf:'center',
      padding:5,

      
  },

  icon:{
      marginRight:6,
  },

  searching:{
      width:'35%',
  },

  select:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:10,
      marginBottom:10,
      
  },

  opt:{
      fontSize:16,
      fontWeight:'600',
      borderWidth:1,
      padding:8,
      width:100,
      borderRadius:20,
  },

  images:{
      width:350,
      height:450,
      marginTop:30,
  },

  imageViews:{
      alignItems: 'center',
      padding:20,
      marginTop:20,
      backgroundColor:'gainsboro',
      alignSelf:'center',
  },


title:{
    paddingTop:10,
    paddingBottom:5,
    fontSize:25,
},

price:{
    fontSize:20,
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
