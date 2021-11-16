import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView,  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons, Entypo, AntDesign,  Feather } from '@expo/vector-icons';

const male = [ 
    {img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8dExkc3JhQzZmNXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60", title:'Versace Eros', price: 'GHC 370.00', key: 1 },
    {img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcmZ1bWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", title:'Bleu De Chanel', price: 'GHC 440.00', key: 2 },
    {img: "https://images.unsplash.com/photo-1592400374339-ecb4c15724c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxwZXJmdW1lc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60", title:'Hugo Boss', price: 'GHC 300.00', key: 3 },
    {img: "https://images.unsplash.com/photo-1579250466094-9370083413dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcmZ1bWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" , title:'Allure Homme Sport', price: 'GHC 550.00', key: 4},
    {img: "https://images.unsplash.com/photo-1624811742200-69166e7b7bcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlcmZ1bWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" , title:'Creed Green Irish Tweed', price: 'GHC 900.00', key: 5},
    {img: "https://images.unsplash.com/photo-1615602400380-3795d0b23777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxwZXJmdW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" , title:'Hugo Boss Private Accord', price: 'GHC 700.00', key: 6},
    {img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZnVtZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" , title:'Coco Chanel Noir', price: 'GHC 950.00', key: 7},
    {img: "https://images.unsplash.com/photo-1588619872756-bb955fe22dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcmZ1bWVzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" , title:'Davidoff Cool Water', price: 'GHC 500.00', key: 8},
    {img: "https://images.unsplash.com/photo-1583442801251-5ce051ed7cb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcmZ1bWVzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" , title:'Acqua Di Gio Absolu', price: 'GHC 780.00', key: 9},
];





export default function Males({navigation}) {
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
            
            <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
                <Entypo style={styles.cart} name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>

        </View>
        <View style={styles.select}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}} >
                <Text style={styles.opt}>All</Text>
            </TouchableOpacity>    

            <TouchableOpacity>
                <Text style={styles.opt}>Men</Text>
            </TouchableOpacity>  

             <TouchableOpacity onPress={() => {navigation.navigate('Females')}} >
                <Text style={styles.opt}>Women</Text>
            </TouchableOpacity>    
        </View>

        <ScrollView >
            <View>
                {male.map((item) => {
                    return ( 
                       
                        <View style={styles.imageViews}>
                            <Image style={styles.images} source={{uri: item.img}} />
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    );
                })}
            </View>           
        </ScrollView>
        <View style={styles.bottombar}>
        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <AntDesign name="home" size={30} color="#D3D3D3" />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Feather name="heart" size={30} color="#D3D3D3" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather name="shopping-bag" size={30} color="#D3D3D3" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="person-outline" size={33} color="#D3D3D3" />
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
    backgroundColor:'whitesmoke',
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
      backgroundColor:'whitesmoke',
      alignSelf:'center',
  },
  
bottombar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingVertical: 10,
},

  
  
});
