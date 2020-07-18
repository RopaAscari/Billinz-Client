import {create} from 'apisauce';
import {useForm} from "react-hook-form";
import jwt from "react-native-pure-jwt";
import React,{useEffect,useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Alert,
  SafeAreaView, StyleSheet,
  ScrollView, View,
  Text, StatusBar,
  TouchableOpacity, TextInput,
  TextInputComponent, Button, TouchableWithoutFeedback, TouchableOpacityComponent
} from 'react-native';

import {
  ReloadInstructions,
  Header,LearnMoreLinks,
  Colors, DebugInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Login({navigation}){
    _onChange => form => console.log(form);

// will print:
var a ={
  valid: true, // will be true once all fields are "valid" (time to enable the submit button)
  values: { // will be in the sanitized and formatted form
  	number: "4242 4242",
  	expiry: "06/19",
  	cvc: "300",
  	type: "visa", // will be one of [null, "visa", "master-card", "american-express", "diners-club", "discover", "jcb", "unionpay", "maestro"]
  	name: "Sam",
  	postalCode: "34567",
  },
  status: {  // will be one of ["incomplete", "invalid", and "valid"]
	number: "incomplete",
	expiry: "incomplete",
	cvc: "incomplete",
	name: "incomplete", 
	postalCode: "incomplete",
  },
};

   const HandleLogin = User => {

           //e.preventDefault();
           /*
           Alert.alert(JSON.stringify(customer));  
           jwt.sign({customer},"my-secret",{alg: "HS256"}).then(console.log)*/
           //console.log(JSON.stringify(User));
           fetch("http://10.0.2.2:2020/register/login",{
           method: "post",
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(User)
            }).then((response) => response.json())
            .then((authToken) => {
                if(typeof authToken != undefined) {
                    console.log("User Authenticated")
                    AsyncStorage.setItem('UserToken',JSON.stringify(authToken));
                    AsyncStorage.setItem("Username",User.username);
                    navigation.navigate('Account')}
                    else {
                            console.log("Access Denied");
                         }
                       }).catch((error) => {
                            console.log(error);
                        });                          
   }

   const { register, handleSubmit, setValue } = useForm();

    /*const [Credentials,Authenticate] = useState();

    useEffect(() => {
            function SetCredentials(username) {
              Authenticate(username);
            }
         })*/
         useEffect(() => {   
            register("username",{required:true});
            register("password",{required:true});
          }, [register]);
  
    return(
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: '#14191A'}}></SafeAreaView>
                <View>
                <Text style={styles.sectionTitle}>Sign in to your account</Text>
                </View>
                <View style={styles.sectionContainer}>
                <View style={styles.body}>
                <Text style={styles.sectionDescription}>Username</Text>
                <TextInput style={styles.TextInputRegister} onChangeText={ text => {
                setValue('username', text) 
                }} />
                <Text style={styles.sectionDescription}>Password</Text>
                <TextInput style={styles.TextInputRegister} onChangeText={ text => {
                setValue('password', text) }}/>          
                    <Text>{"\n"}</Text>
                    <TouchableOpacity style={styles.ButtonRegister} onPress={handleSubmit(HandleLogin)}>
                <Text style={styles.ButtonText}>L O G I N </Text>
                </TouchableOpacity>
                </View>
                </View>
            <SafeAreaView style={{flex: 1, backgroundColor: '#14191A'}}></SafeAreaView>
        </>
    )
} 
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#14191A',
    },
    engine: {
      position: 'absolute',
      right: 0,
      backgroundColor: '#14191A'
    },
    body: {
      backgroundColor: '#14191A'
    },
    sectionContainer: {
      paddingTop:30,
      paddingHorizontal: 30,
      backgroundColor: '#14191A'
     
    },
    Welcome: {
      textAlign:"center",
      fontSize: 19,
      color:'white',
      fontWeight: '900',
      fontFamily: 'Roboto',
    },
    TextInputRegister: {
      height: 50, 
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 17,
      backgroundColor:'#ffffff',
      
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600",
      color:'white',
      backgroundColor: '#14191A',
      textAlign:"center",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '700',
      color: 'white',
      textAlign:"left",
      fontFamily: 'American Typewriter',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    ButtonRegister: {
      height:55,
      width:220,
      paddingTop:15,
      paddingBottom:15,
      marginTop:10,
      marginLeft:65,
      marginRight:55,
      backgroundColor:'#F150D8',
      borderRadius:50,
      borderColor: '#F150D8'
    },
    ButtonText:{
      fontSize: 18,
      color: 'white',
      textAlign:"center",
      fontWeight: '700',
    }
  });
  
  
  