import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Forgotpass from './Forgotpass';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import Statement from './Statement';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='Forgotpass' component={Forgotpass}></Stack.Screen>
      <Stack.Screen name='Deposit' component={Deposit}></Stack.Screen>
      <Stack.Screen name='Withdraw' component={Withdraw}></Stack.Screen>
      <Stack.Screen name='Transfer' component={Transfer}></Stack.Screen>
      <Stack.Screen name='Statement' component={Statement}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
   
  );
}
