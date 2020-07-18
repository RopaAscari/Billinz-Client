import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import{ Text, View, StyleSheet,SafeAreaView, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logout from '../../userLogout/userLogout'
import AsyncStorage from '@react-native-community/async-storage';
import jwt from "react-native-pure-jwt";
import axios from 'axios';


export default class AccountSettings extends React.Component{
    constructor(props) {
    super(props) 

    this.state = {
        session:true,        
    }
 }

 componentDidMount(){
     this.interval = setInterval(()=>
     this.Test(),1000);
 }
 componentWillUnmount(){
     clearInterval(this.interval);
 }

Test = async() => { 

    await AsyncStorage.getItem('UserToken',(err,token)=> {
    if(err){
        throw err
    }
    if(token!==null){
    var token_a = token.split(":")
    var token_b = token_a[1].split("\"")
    axios.get('http://10.0.2.2:2020/register/session',{headers:{'Authorization':`Bearer: ${token_b[1]}`}})
    .then((response) => response.data)
    .then((status) => {
        if(status == false) {
            console.log("Token Expired");
            Alert.alert("Session expired");
            Logout(this.props.navigation);
           }
         else {
            console.log("Gucci")
         }
      })
    }
    else {
         console.log("Invalid Token")
    }
  })
}

 render(){
     return(
        <>
        <SafeAreaView style={{flex:0.1}}/>
         <View>
             <Text style={styles.SettingsText}>S E T T I N G S{"\n"}</Text>

             <Icon style={{marginLeft:180,}} name="ios-contact" size={70}></Icon>
     <Text style={{textAlign:"center"}}>Edit{"\n"}</Text>
             
                <TouchableOpacity style={styles.InfoContainer} onPress={()=>this.props.navigation.navigate('ViewAccount')}> 
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.Options}> View Account {"\n"}</Text>  
                    <Icon name="ios-eye" size={35} style={{marginLeft:40,marginRight:90,marginTop:5,paddingLeft:140}}/>                    
                    </View> 
                </TouchableOpacity>
             
    
                <TouchableOpacity style={styles.InfoContainer} onPress={()=>this.props.navigation.navigate('UpdateAccount')}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.Options}> Update Settings {"\n"}</Text>  
                    <Icon name="ios-refresh" size={35} style={{marginLeft:40,marginRight:90,marginTop:5,paddingLeft:120}}/>                    
                    </View> 
                </TouchableOpacity>
             
                <TouchableOpacity style={styles.InfoContainer} onPress={()=>this.props.navigation.navigate('AddCard')}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.Options}> Add Debit Card{"\n"}</Text>  
                    <Icon name="ios-card" size={35} style={{marginLeft:40,marginRight:90,marginTop:5,paddingLeft:130}}/>                    
                    </View> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.InfoContainer} onPress={()=>this.props.navigation.navigate('DeleteAccount')}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.Options}> Delete Account{"\n"}</Text>  
                    <Icon name="ios-trash" size={35} style={{marginLeft:40,marginRight:90,marginTop:5,paddingLeft:130}}/>                    
                    </View> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.InfoContainer} onPress={()=>this.props.navigation.navigate('About')}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.Options}> About{"\n"}</Text>  
                    <Icon name="ios-information-circle" size={35} style={{marginLeft:40,marginRight:90,marginTop:5,paddingLeft:210}}/>                    
                    </View> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.InfoContainer} onPress={()=>this.props.navigation.navigate('Help')}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.Options}> Help{"\n\n\n\n"}</Text>  
                    <Icon name="ios-help-circle" size={35} style={{marginLeft:40,marginRight:90,marginTop:5,paddingLeft:225}}/>                    
                    </View> 
                </TouchableOpacity>
                <Text>{"\n\n"}</Text>

                <TouchableOpacity style={styles.ButtonLogout} onPress={()=>Logout(this.props.navigation)}>
                <Text style={styles.ButtonText}>L O G O U T</Text>
                </TouchableOpacity>
                <Text>{"\n"}</Text>

         <Text style={styles.FooterText}> {"\n\n"}Powered by TIGR</Text>
         <Text style={{textAlign:'center'}}>______________________</Text>

         </View>
        <SafeAreaView/>
        </>
     )
  }
}
const styles= StyleSheet.create({

    SettingsText: {
        textAlign:'center',
        fontSize:30,
        fontWeight:"700",
    },
    Options: {
        marginLeft:40,
        fontSize:20,
        marginTop:10,    
    },
    ButtonLogout: {
        height:55,
        width:160,
        paddingTop:15,
        paddingBottom:15,
        marginTop:10,
        marginLeft:130,
        marginRight:30,
        backgroundColor:'#1C71BA',
        borderRadius:50
    },
    ButtonText:{
        textAlign:'center',
        fontSize:15,
        fontWeight:"700",
        color:'white',
        paddingBottom:20,
    },
     FooterText: {
        textAlign:'center',
        fontSize:12,
        fontWeight:"700",   
},
InfoContainer: {
    backgroundColor:'white',
    height:60,
    borderBottomWidth:0.5,
    borderBottomColor:'#D7D2D2'
}
})