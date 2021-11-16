import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/Sign-up';
import Home from './screens/Home';
import Males from './screens/Males';
import Females from './screens/Females';
import Cart from './screens/Cart';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack=createNativeStackNavigator();

  return ( 
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Welcome} name='Welcome' options={{headerShown:false}} />
          <Stack.Screen component={Login} name='Login' options={{headerShown:false}} />
          <Stack.Screen component={SignUp} name='SignUp' options={{headerShown:false}} />
          <Stack.Screen component={Home} name='Home' options={{headerShown:false}} />
          <Stack.Screen component={Males} name='Males' options={{headerShown:false}} />
          <Stack.Screen component={Females} name='Females' options={{headerShown:false}} />
          <Stack.Screen component={Cart} name='Cart' options={{headerShown:false}} />



        </Stack.Navigator>
      
      </NavigationContainer>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
