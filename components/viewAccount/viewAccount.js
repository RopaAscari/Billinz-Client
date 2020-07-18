import React from 'react';
import {View,StyleSheet,Text,SafeAreaView, Alert} from 'react-native';
import axios from 'axios';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeConsumer } from 'react-native-elements';

export default class viewAccount extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            DATA:""
            
        }
    }

    componentDidMount(){

        this.ViewInfo();
    }

    ViewInfo = async() => {
        var data = await AsyncStorage.getItem('UserToken',(err,token)=>
        {
          if(data !== '')
          {              
              var token_a = token.split(":")
              var token_b = token_a[1].split("\"")
              axios.get('http://10.0.2.2:2020/register/users', { 
              headers: {'Authorization': `Bearer ${token_b[1]}`}})
              .then((response) => response.data)
              .then((USER) => {
                  if(USER !== "") {
                      console.log("USER: ",USER);
                      this.setState({DATA : USER})
                     }
                  //   console.log(this.state.USERDATA.result.firstname)
              })
           } else {
                console.log("Authorization failed")
            }})
    }



    render(){
        return (
        <>
            <SafeAreaView style={{flex:0.040}}/>
                <View>
                    <Text style={styles.Heading}>VIEW USER{"\n\n"}</Text>
                    <Text style={styles.Text}>Firstname: {this.state.DATA.firstname}</Text>
                    <Text style={styles.Text}>Lastname: {this.state.DATA.lastname}</Text>
                    <Text style={styles.Text}>Username: {this.state.DATA.username}</Text>
                    <Text style={styles.Text}>Email: {this.state.DATA.email}</Text>
            
                </View>
            <SafeAreaView/>
        </>
        )
    }
}
const styles = StyleSheet.create({
    Heading:{
        fontSize:22,
        fontWeight:"700",
        marginLeft:30,
        textAlign:'center'
    },
    Text:{
        fontSize:22,
        fontWeight:"700",
        marginLeft:30
    }
    
})