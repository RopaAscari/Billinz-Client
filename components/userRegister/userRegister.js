import * as Yup from "yup";
import {create} from 'apisauce';
import { Formik } from "formik";
import {useForm} from "react-hook-form";
import React,{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Alert,
  Text, StatusBar, 
  ScrollView, View,
  SafeAreaView, StyleSheet,
  TouchableOpacity,TextInput,
  TextInputComponent, Button, TouchableWithoutFeedback, TouchableOpacityComponent
} from 'react-native';

import {
  Header,Colors,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ValidateScehma = Yup.object({

  firstname: Yup.string().required("please username!!!")
})

/*const getInfo = async()=> {
  try {
  const val = await AsyncStorage.getItem('UserToken');
  if(val !== null) {
  return val;
 } 
} catch(e) {
      console.log(e);
  }
}*/

export default function Register({navigation}) {

  var value = "";
  let Customer = null;

  const[ store, SetStore ] = useState(null);

  const onSubmit = User =>
   {
       Customer = User;
       //console.log(JSON.stringify(Customer))
       if(Customer) {
        try {
          fetch("http://10.0.2.2:2020/register", {
            method:"post",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(Customer)
          })
          .then(res => {
            console.log(res.data);
          })
        }catch(err) {
          console.log(err);
        }

        console.log("Running...")
      }
      else
      {
        console.log("Customer Object is empty");
      }
      navigation.navigate('Login');
      return Customer;
   };
   
   const { register, handleSubmit, setValue } = useForm();
   const [storeUser,Validate]= useState();


   useEffect(() => {
     register("firstname");
     register("lastname");
     register("username");
     register("password");
     register("email");
   }, [register]);

  return (

 
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#14191A'}}></SafeAreaView>
        <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Create an account{"\n"}</Text>
            </View>
        </View>

        <View style={styles.sectionContainer}>
        <View style={styles.body}>

            <Text style={styles.sectionDescription}> First Name</Text>
            <TextInput style={styles.TextInputRegister} onChangeText={ text => {
            setValue('firstname', text) 
            }}/>
            <Text style={styles.sectionDescription}>Last Name</Text>
            <TextInput style={styles.TextInputRegister} onChangeText={ text => {
            setValue('lastname', text) 
            }}/>

            <Text style={styles.sectionDescription}>Username</Text>
            <TextInput style={styles.TextInputRegister} onChangeText={ text => {
            setValue('username', text) 
            }}/>

            <Text style={styles.sectionDescription}>Password</Text>
            <TextInput style={styles.TextInputRegister} onChangeText={ text => {
            setValue('password', text) }}/>

            <Text style={styles.sectionDescription}>Email</Text>
            <TextInput style={styles.TextInputRegister} onChangeText={ text => {
            setValue('email', text) 
            }} />  
            <Text>{"\n"}</Text>         
            <TouchableOpacity style={styles.ButtonRegister} onPress={handleSubmit(onSubmit)}>
           <Text style={styles.ButtonText}>R E G I S T E R </Text>
           </TouchableOpacity>

           </View>
        </View>
      <SafeAreaView style={{flex: 1, backgroundColor: '#14191A'}}></SafeAreaView>   
    </>
  );
};

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
    fontSize: 24,
    fontWeight: '900',
    color:'white',
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


