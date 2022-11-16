import { Button, StyleSheet, Text, TextInput, View,Image, Linking, Touchable, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import axios from 'axios';



const Signup = ({navigation}) => {


    
    const register=async()=>{
        await axios({
          method: 'POST',
          url: 'http://192.168.0.109:8081/create',
          data: {
            accNo:accno,
            username:username,
            email: email,
            phoneno:phone,
            city:city,
            password: password,
            balance:balance
          }
        })
        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          alert(JSON.stringify(response.data));
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }
  const navlog=()=>{
    register();
    alert("Signup Successful");
    navigation.navigate("Home",{username,accno})
  }
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[city,setcity]=useState("");
    const[password,setpassword]=useState("");
    const[balance,setbalance]=useState("");
    const[accno,setaccno]=useState("")
    const[conf,setconf]=useState("");
    const validate=()=>{
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if((username=="")||(email=="")||(password=="")||(accno=="")||(city=="")||(balance=="")||(phone=="")){
          alert("Input all fields")
        }
        else if(password!=conf){
            alert("Passwords do not match");
        }
        else if(password.length<8){
          alert("Password should contain more than 8 characters");
        }
        else if(!strongRegex.test(email)){
          alert("Enter proper email");
        }
        else if((phone.length<10)||(phone.length>10)){
            alert("Phone number should be 10 digit");
        }
        else if(accno.length!=4){
            alert("Account number should be 4 digit")
        }
        else if(balance<2500){
            alert("Minimum Balance for creating account should be 2500")
        }
        else{
            Alert.alert("Confirm","Are you sure you want to continue?", [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                { text: "OK", onPress: () => navlog() }
              ],
              {cancelable:true})
        }
    }
  return (
    <View style={styles.container}>
         <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./assets/logo1.png')}></Image>
        <Text style={styles.header}>Create Account</Text>
    <View style={styles.container1}>
    <ScrollView contentContainerStyle={styles.scrollable} style={styles.container1}>
     <TextInput onChangeText={(uname)=>setusername(uname)} autoFocus style={styles.input} placeholder='Username'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(email)=>setemail(email)} style={styles.input} placeholder='Email'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(accno)=>setaccno(accno)} style={styles.input} placeholder='Enter Acc No' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(phoneno)=>setphone(phoneno)} style={styles.input} placeholder='Phone No'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(city)=>setcity(city)} style={styles.input} placeholder='City' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(balance)=>setbalance(balance)} style={styles.input} placeholder='Enter Initial Balance' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(pass)=>setpassword(pass)} secureTextEntry={true} style={styles.input}  placeholder='Password' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(confirm)=>setconf(confirm)} secureTextEntry={true} style={styles.input}  placeholder='Confirm Password' placeholderTextColor='#A3C7D6'></TextInput>
     <View style={{padding:20,paddingBottom:40}}>
     <TouchableOpacity onPress={validate} style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Create Account</Text>
     </TouchableOpacity>
     </View>
     <View>
     {/* <Text onPress={()=>Linking.openURL(url)}>Forgot Password?</Text> */}
     </View>   
    </ScrollView>
    </View>
     <StatusBar style="auto" />
   </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16213E',
        justifyContent:'flex-end',
      },
      header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'white',
        paddingLeft:20,
        paddingBottom:15
      },
      scrollable:{
        
        alignItems:'center'
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
        // justifyContent:"space-between",
      },
    container1: {
        
          flex:0.9,
          backgroundColor: '#fff',
        //   alignItems: 'center',
        //   justifyContent: 'flex-start',
        //   borderWidth:2,
          borderRadius:17,
          backgroundColor:'#0F3460',
          width:400
        },
        btn:{
            height:45,
            width:150,
            borderWidth:2,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            backgroundColor:'white',
            borderColor:'#A3C7D6',
        }
  });
  
export default Signup