import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';


export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.accountt}>
        
        <View style={styles.account1}>
            <Text style={styles.text1}>Profile</Text>
       </View>
       
      

    </View>
    <View style={styles.second}>
    <View >
        <Text style={styles.text2}>
            Welcome,
        </Text>
        <Text style={styles.text3}>
            Your account
        </Text>
    </View>
   

    </View>   

    <ScrollView>
      <View style={styles.aview}> 
        <Text style={styles.text4}>
          MY ACCOUNT
        </Text>
      </View>
      <View style={styles.order}>
      <AntDesign name="inbox" size={24} color="black" />
        <Text style={styles.text5}>
        
          Orders
        </Text>
      </View>
      <View style={styles.inbox}>
      <AntDesign name="mail" size={22} color="black" />
        <Text style={styles.text6}>
        
          Inbox
        </Text>
      </View>
      <View style={styles.saved}>
      <Ionicons name="heart-outline" size={24} color="black" />
        <Text style={styles.text7}>
        
          Saved Items
        </Text>
      </View>
      <View style={styles.recent}>
      <Ionicons name="ios-eye-outline" size={24} color="black" />
        <Text style={styles.text8}>
        
          Recently View
        </Text>
      </View>
      <View style={styles.recent}>
      <MaterialIcons name="youtube-searched-for" size={24} color="black" />
        <Text style={styles.text8}>
        
          Recently Searched
        </Text>
      </View>
     

      <View style={styles.aview}> 
        <Text style={styles.text4}>
          SETTINGS
        </Text>
      </View>
      <View style={styles.det}>
        <Text style={styles.text5}>
        
         My Details
        </Text>
      </View>

      <View style={styles.address}>
        <Text style={styles.text5}>
        
         Address Book 
        </Text>
      </View>

      <View style={styles.address}>
        <Text style={styles.text5}>
        
         Change Password
        </Text>
      </View>

     

    </ScrollView>
    

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
  accountt:{
    alignItems:'center',
    backgroundColor:'#343434',
    flexDirection:'row',
    paddingLeft:'40%',
    paddingTop:'15%',
    paddingBottom:'3%',
    
  },
  second:{
    padding:'2%',
    backgroundColor:'#A9A9A9',
    flexDirection:'row',
   
    
  },
  text1:{
    fontSize:25,
    color:'white',
  },
  text2:{
    fontSize:18,
    color:'white',
    
    
  },
  text3:{
    color:'white',
    paddingTop:5,
    
  },
  text5:{
    paddingLeft:'4%',
    fontSize:22,
  },
  text6:{
    paddingLeft:'4%',
    fontSize:22,
  },
  text7:{
    paddingLeft:'3%',
    fontSize:22,
  },
  text8:{
    paddingLeft:'3%',
    fontSize:22,
  },
  search:{
      paddingLeft:90,
  },
  cart:{
    paddingLeft:25,
},
mainButton:{
    marginLeft:'50%',
    borderWidth:1,
    width:105,
    borderRadius:10,
    backgroundColor:'orange',
    borderColor: 'orange',
    
},
button:{
    color:'white',
    fontSize:16,
    padding:'7%',
    
    
    
},
touch:{
    alignItems:'center',
    marginTop:1,
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

account:{
  flexDirection:'row',
   
   alignItems:'center',
  
   
 },
 aview:{
   backgroundColor:'#D3D3D3',
   padding:'3.6%',
   paddingTop:'5%',
   paddingBottom:'2%',
 },
 order:{
   flexDirection:'row',
   alignItems:'center',
   marginTop:'6%',
   paddingLeft:'2%',
 },
 inbox:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
},
saved:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
},
recent:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
},
rate:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
  marginBottom:'6%',
},
det:{
  marginTop:'5%',
},
address:{
  marginTop:'9%',
},
buttonn:{
  fontSize:30,
  padding:'4%',
  color:'white',
  
  
  
},

text4:{
    alignSelf:'center',
},
mainButtonn:{
  marginTop:'10%',
  width:200,
  borderWidth:1,
  borderRadius:20,
  alignItems:'center',
  backgroundColor:'orange',
  borderColor:'orange',
  
  
},

});