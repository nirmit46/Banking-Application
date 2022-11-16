import { View, Text ,StyleSheet,Image,screenLeft,TouchableOpacity} from 'react-native'
import React from 'react'
import axios from 'axios'
import  { useState } from 'react'
const Home = ({route,navigation}) => {
  const balance=async()=>{
    await axios({
      method: 'GET',
      url: 'http://192.168.0.109:8081/viewbalance/'+accno,
    })
    .then(function (response){
      console.log("response ", JSON.stringify(response.data))
      alert("Account number:"+accno+'\n Balance:'+response.data.balance);
    })
    .catch(function(error){
      console.log("error",error)
      alert(error);
    })
  }


  const{username,accno}=route.params;
  return (
    <View style={styles.container}>
      <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start'}} source={require('./assets/logo.png')}></Image>
      <Text style={styles.header}>Welcome {username}</Text>
    <View style={styles.container1}>
      <Text style={{fontSize:25,color:'#9e3239',padding:10,fontWeight:'bold'}}>Select Operation</Text>
      <View style={styles.container2}>
      <TouchableOpacity onPress={balance} style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'white'}}>View Balance</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate("Deposit",{accno})} style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'white'}}>Deposit</Text>
     </TouchableOpacity>
     </View>
     <View style={styles.container2}>
      <TouchableOpacity onPress={()=>navigation.navigate("Withdraw",{accno})}  style={styles.btn}>
        <Text style={{alignItems:'center',fontSize:17,color:'white'}}>Withdraw</Text>
     </TouchableOpacity>
     <TouchableOpacity  style={styles.btn} onPress={()=>navigation.navigate("Transfer",{accno})}>
        <Text style={{alignItems:'center',fontSize:17,color:'white'}}>Transfer</Text>
     </TouchableOpacity>
      </View>
      <View style={styles.container2}>
     <TouchableOpacity  style={styles.btn} onPress={()=>navigation.navigate("Statement",{accno})}>
        <Text style={{alignItems:'center',fontSize:17,color:'white'}}>View Statement</Text>
     </TouchableOpacity>
      </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header:{
    fontSize:35,
    fontFamily:'notoserif',
    color:'white',
    padding:10
  },
  container: {
    flex: 1, 
    justifyContent: 'flex-end',
    position:'relative',
    backgroundColor:'#9e3239'
  },
  input:{
    margin:7,
    borderRadius:7,
    padding:10,
    height:40,
    width:200,
    borderWidth:2,
    justifyContent:"space-between",

  },
  container1: {
    flex:0.90,
    width:400,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius:17,
    backgroundColor:'#E6E1E1',
    position:'relative'
  },
  container2: {
    width:400,
    // flex:1,
    padding:30,
    top:30,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius:17,
    backgroundColor:'#E6E1E1',
    position:'relative'
  },
  btn:{
    height:70,
    width:150,
    padding:5,
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#9e3239',
    borderColor:'#A3C7D6',
}
});
export default Home