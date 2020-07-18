import React,{useEffect,useState} from 'react';
import {create} from 'apisauce';
import {useForm} from "react-hook-form";

import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TextInputComponent,Button, TouchableWithoutFeedback, TouchableOpacityComponent
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import jwt from "react-native-pure-jwt";

export default function HomeScreen({navigation}){
    return(
        <>
            <SafeAreaView style={{flex: 2, backgroundColor: '#14191A'}}></SafeAreaView>
                <View>
                    <Text style={styles.sectionTitle}>B i l l i n z{"\n"}</Text> 
                         
                </View>    

<View style = {styles.body}>
    <View style={{ flexDirection: "row" }}>
            <View>
              <TouchableOpacity style={styles.ButtonRegister} onPress={()=>navigation.navigate('Register')}>
                <Text style = {styles.ButtonText}>S I G N   U P</Text>
               </TouchableOpacity>
            </View>
          
            <View>
                <TouchableOpacity style={styles.ButtonRegister} onPress={()=>navigation.navigate('Login')}>
                <Text style = {styles.ButtonText}>S I G N   I N</Text>
                </TouchableOpacity>
            </View>
    </View>
 </View>


            <SafeAreaView style={{flex: 2, backgroundColor: '#14191A'}}></SafeAreaView>
        </>
    )
} 
const styles = StyleSheet.create({
    ButtonLine:{
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
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
      backgroundColor: '#14191A'
    },
    TextInputRegister: {
      height: 50, 
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 17,
      backgroundColor:'#ffffff',
      
    },
    sectionTitle: {
      fontSize: 34,
      fontWeight: "700",
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
      width:160,
      paddingTop:15,
      paddingBottom:15,
      marginTop:10,
      marginLeft:20,
      marginRight:20,
      backgroundColor:'#F150D8',
      borderRadius:50,
      borderColor: '#F150D8',
      
    },
    ButtonText:{
      fontSize: 18,
      color: 'white',
      textAlign:"center",
      fontWeight: '700',
    }
  });
  
  
  