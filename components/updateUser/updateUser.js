import React from 'react';
import {View,StyleSheet,Text,SafeAreaView, Alert} from 'react-native';
import axios from 'axios';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeConsumer } from 'react-native-elements';

export default class UpdateAccount extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            email:'',
           data:{
               
           }
        }

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    CheckInput = () => {
        let info
        if(this.state.firstname!=''){
            info = {firstname:this.state.firstname}
         }
         if(this.state.lastname!=''){
            info = {lastname:this.state.lastname}
         }
         if(this.state.username!=''){
            info = {username:this.state.username}
         }
         if(this.state.password!=''){
            info = {password:this.state.password}
         }
         if(this.state.email!=''){
            info = {email:this.state.email}
         }
        this.setState({data:info})
    }

    onChangeFirstname = (firstname) => {
        this.setState({firstname}) 
    }
    onChangeLastname = (lastname) => {
        this.setState({lastname}) 
    }
    onChangeUsername = (username) => {
        this.setState({username}) 
    }
    onChangePassword = (password) => {
        this.setState({password}) 
    }
    onChangeEmail = (email) => {
        this.setState({email}) 
    }

    UpdateUser = async() => {
     
        this.CheckInput()
        console.log(this.state.data)
        var data = await AsyncStorage.getItem('UserToken', (err,token)=>
        {
          if(data !== '')
          {              
              var token_a = token.split(":")
              var token_b = token_a[1].split("\"")
              //axios.put('http://10.0.2.2:2020/register/UpdateAccount', { 
              //headers: {'Authorization': `Bearer ${token_b[1]}`},data:{}})
          }
          else{
            console.log("Authorization failed")
          }
       })
    }

    render(){
        return (
            <>
                <View>
                    <Text style={styles.Heading}>U P D A T E    U S E R {"\n"}</Text>
                    <TextInput style={styles.TextInput} placeholder="Firstname" onChangeText={this.onChangeFirstname} value={this.state.firstname}></TextInput>
                    <Text>{"\n"}</Text>
                    <TextInput style={styles.TextInput} placeholder="Lastname" onChangeText={this.onChangeLastname} value={this.state.lastname}></TextInput>
                    <Text>{"\n"}</Text>
                    <TextInput style={styles.TextInput} placeholder="Username" onChangeText={this.onChangeUsername} value={this.state.username}></TextInput>
                    <Text>{"\n"}</Text>
                    <TextInput style={styles.TextInput} placeholder="Password" onChangeText={this.onChangePassword} value={this.state.password}></TextInput>
                    <Text>{"\n"}</Text>
                    <TextInput style={styles.TextInput} placeholder="Email" onChangeText={this.onChangeEmail} value={this.state.email}></TextInput>
                    <Text>{"\n"}</Text>
                    <TouchableOpacity style={styles.Buttons} onPress={this.UpdateUser}>
                        <Text style={styles.ButtonText}>
                            U P D A T E
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    Heading:{
        fontSize:27,
        fontWeight:"700",
        marginLeft:30,
        textAlign:'center'
    },
    Text:{
        fontSize:22,
        fontWeight:"700",
        marginLeft:30
    },
    TextInput:{
     backgroundColor:'white',
     width: 320,
     marginLeft:50
    },
    ButtonText: {
        fontSize: 12,
        color: 'white',
        textAlign:"center",
        fontWeight: '700',
    },
    Buttons:{
        height:45,
        width:150,
        paddingTop:15,
        paddingBottom:15,
        marginTop:10,
        marginLeft:120,
        marginRight:10,
        backgroundColor:'#1C71BA',
        borderRadius:50,
        borderColor: '#F150D8'
    },
})