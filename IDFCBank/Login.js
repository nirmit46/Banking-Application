
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View,Image, Linking, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


export default function Login({navigation}) {



  const validatelog=()=>{
    if((username=="")||(password=="")||(accno=="")){
      alert("Enter all fields");
    }
    else{
      getuser();
    }
  }
    const getuser=async()=>{
        await axios({
          method: 'GET',
          url: 'http://192.168.0.109:8081/viewbalance/'+accno,
        })
        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          if(username==response.data.username&&password==response.data.password){
            alert("Login Successful")
            navigation.navigate("Home",{username,accno});
          }
          else{
            alert("Incorrect Credentials")
          }
          // alert(JSON.stringify(response.data));
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }
    

      const[username,setusername]=useState("");
      const[accno,setaccno]=useState("");
      const[password,setpassword]=useState("");
  return (
    <View style={styles.container}>
        <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./assets/logo1.png')}></Image>
        <Text style={styles.header}>Login</Text>
     <View style={styles.container1}>
     {/* <Text style={{fontSize:25,fontFamily:"Roboto"}}>Login</Text> */}
     {/* <Image style={{height:50,width:50}} source={require('./assets/bus.png')}></Image> */}
     <TextInput onChangeText={(accno)=>setaccno(accno)} autoFocus style={styles.input} placeholder='Enter Acc No' placeholderTextColor='#A3C7D6'></TextInput>
      <TextInput onChangeText={(uname)=>setusername(uname)}  style={styles.input} placeholder='Username' placeholderTextColor='#A3C7D6'></TextInput>
      <TextInput onChangeText={(pass)=>setpassword(pass)} secureTextEntry={true} style={styles.input}  placeholder='Password' placeholderTextColor='#A3C7D6'></TextInput>
      <TouchableOpacity style={styles.btn} onPress={validatelog}>
        <Text style={{color:'black',fontSize:15}}>Login</Text>
      </TouchableOpacity>
      
      <Text  onPress={()=>navigation.navigate("Forgotpass")} style={{justifyContent:'center',marginBottom:15,color:'#A3C7D6',paddingTop:15}}>Forgot Password?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
        <Text style={{color:'#A3C7D6'}}>New to the App? Sign Up here</Text>
      </TouchableOpacity>
        
     </View>  
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
    header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'white',
        paddingLeft:20,
        paddingBottom:15,
        paddingTop:10
      },
    container: {
      flex: 1,
      backgroundColor: '#16213E',
      justifyContent:'flex-end',
    },
    input:{
        color:'#A3C7D6',
      margin:15,
      borderRadius:7,
      padding:10,
      height:60,
      width:300 ,
      borderWidth:2,
      borderColor:'#A3C7D6',
      justifyContent:"space-between",
    },
    container1: {
    paddingTop:100,
      flex:0.9,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'space-evenly',
    //   borderWidth:2,
      borderRadius:17,
      backgroundColor:'#0F3460',
      width:400
    },
    btn:{
        height:45,
        width:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'white',
        borderColor:'#A3C7D6',
        
    }
  });
  