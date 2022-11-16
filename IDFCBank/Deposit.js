import { Button, StyleSheet, Text, TextInput, View,Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react'
import  { useState } from 'react'
import axios from 'axios';

const Deposit = ({route,navigation}) => {

    const validatedep=()=>{
        if(amount==""){
            alert("Enter Amount");
        }
        else{
            deposit();
        }
    }
    const deposit=async()=>{
        await axios({
          method: 'POST',
          url: 'http://192.168.0.109:8081/deposit/'+accno+'/'+amount,
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
    const [amount, setamount] = useState("");
    const{accno}=route.params;
  return (
    <View style={styles.container}>
    <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./assets/logo.png')}></Image>
    <Text style={styles.header}>Deposit Amount {}</Text>
    <View style={styles.container1}>
    <TextInput onChangeText={(amount)=>setamount(amount)} style={styles.input} placeholder='Enter Amount to Deposit' placeholderTextColor='#9e3239'></TextInput>
    <TouchableOpacity style={styles.btn} onPress={validatedep}>
        <Text style={{color:'white',fontSize:15}}>Deposit</Text>
      </TouchableOpacity>
      <Image style={{height:150,width:200,resizeMode:'contain',justifyContent:'center',paddingLeft:100,marginTop:50,tintColor:'#9e3239'}} source={require('./assets/deposit.png')}></Image>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        fontSize:35,
        fontFamily:'notoserif',
        color:'white',
        paddingLeft:20,
        paddingBottom:15
      },
    container: {
      flex: 1,
      backgroundColor: '#9e3239',
      justifyContent:'flex-end',
    },
    input:{
        color:'#9e3239',
      margin:15,
      borderRadius:7,
      padding:10,
      height:60,
      width:300 ,
      borderWidth:2,
      borderColor:'#9e3239',
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
      backgroundColor:'#E6E1E1',
      width:400
    },
    btn:{
        height:55,
        width:120,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#9e3239',
        borderColor:'#A3C7D6',
        marginTop:30,
    }
  });
  
export default Deposit