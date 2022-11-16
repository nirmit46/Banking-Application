import { Button, StyleSheet, Text, TextInput, View,Image, Linking, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect } from 'react'
import  { useState } from 'react'
import axios from 'axios';


const Statement = ({route,navigation}) => {
    const {accno}=route.params;

let myarr=[];
   const getstatement=()=>{
    axios.get(`http://192.168.0.109:8081/history/`+accno).then(
        (response)=> {
            // console.log(response);
            // alert(JSON.stringify(response.data));
            setstatement(response.data);
            console.log(statement);
            
            // setstatement(JSON.stringify(response.data));
            // alert(statement)
        },
  
    (error)=>{
        console.log(error)
    }
    );
   }

   useEffect(() => {
     getstatement();
   
     
   }, [])
   


   
    const [statement, setstatement] = useState([]);
  return (
    <View style={styles.container}>
    <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start',paddingLeft:100}} source={require('./assets/logo.png')}></Image>
    <Text style={styles.header}>Account Statement</Text>
    <View style={styles.container1}>
   {/* <Text>{listItems}</Text> */}
   <View style={{flex:1,paddingHorizontal:3,backgroundColor:'#E6E1E1'}}>
    <View style={{flexDirection:'row',paddingHorizontal:3}}>
        <Text style={styles.table}>Sender</Text>
        <Text style={styles.table}>Receiver</Text>
        <Text style={styles.table}>Type</Text>
        <Text style={styles.table}>Amount</Text>
    </View>
   <FlatList data={statement} renderItem={(e)=>{
    return<View style={{flex:1,flexDirection:'row',paddingHorizontal:3,backgroundColor:'#E6E1E1'}}>
       <Text style={styles.table}>{e.item.accNo1}</Text>
       <Text style={styles.table}>{e.item.accNo2}</Text>
       <Text style={styles.table}>{e.item.trnstype}</Text>
       <Text style={styles.table}>{e.item.amount}</Text>
    </View>
    // return <Text style={{color:'white',fontSize:20}}>Account Number 1: {e.item.accNo1}  {"\n"} Account Number 2: {e.item.accNo2}  {"\n"} Transaction Type: {e.item.trnstype}  {"\n"} Amount: {e.item.amount} {"\n"}</Text>
   }}></FlatList>
    {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Home")}>
        <Text style={{color:'black',fontSize:15}}>Back to Home</Text>
      </TouchableOpacity> */}
      </View>
    </View >
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
    paddingTop:30,
    // paddingLeft:10,
    // paddingRight:10,
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
        height:45,
        width:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'white',
        borderColor:'#A3C7D6',
        
    },
    table:{
        borderWidth:1,  width:80,height:30, paddingLeft:12, paddingTop:5, backgroundColor:'#9e3239',color:'white',fontSize:15 
    }
  });
  
export default Statement