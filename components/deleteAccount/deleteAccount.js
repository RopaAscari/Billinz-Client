import React from 'react';
import {View,StyleSheet,Text,SafeAreaView, Alert} from 'react-native';
import axios from 'axios';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeConsumer } from 'react-native-elements';

export default class deleteAccount extends React.Component{
    constructor(props) {
    super(props)

        this.state = {
            show:false,
            password:''
        }

        this.onChange = this.onChange.bind(this);
   }

        Show = () => {
            this.setState({show:!this.state.show})
        }

       onChange = (password)=>{
           this.setState({password})
       }


        Delete = async() => {

             var gettoken = await AsyncStorage.getItem('UserToken',(err,token)=>{
                 if(err){console.log("Error retrieving token",err)}
                 else { 
                       console.log("Token retireved successfully");
                  }
             })
             //console.log(gettoken)
             var token_a = gettoken.split(":")
             var token_b = token_a[1].split("\"")
             const password = this.state.password
             axios.delete('http://10.0.2.2:2020/register/deleteAccount',{ 
                headers: {'Authorization': `Bearer ${token_b[1]}`},
             data: { 
              password
            }}
            ).then((res)=>res.status)
            .then((status) =>{
                if(status == 200){
                    console.log("Success")
                    this.props.navigation.navigate('Login');
                } else if(status == 404) {
                    console.log('Failed');
                    Alert.alert("Incorrect Password");
                }
            })
         }
    

    render(){
        return (
        <>
            <SafeAreaView style={{flex:0.1}}/>
                <View style={styles.Body}>
                    <Text style={styles.Heading}>D E L E T E  A C C O U N T{"\n"}</Text>
                    <Text style={styles.TextBody}>Are you sure you want to delete your account?</Text>
                    <View style = {{flexDirection:'row'}}>
                        <TouchableOpacity style = {styles.Buttons}><Text style={styles.ButtonText} onPress={this.Show}>Y E S</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.Buttons}><Text style={styles.ButtonText} onPress={()=>this.props.navigation.navigate('AccountSettings')}>N O</Text></TouchableOpacity>
                    </View>
                   <Text>{"\n\n\n\n\n"}</Text>

                   {
                       this.state.show?
                       <Text style ={styles.PasswordText}>
                          Enter your password {"\n"}
                       </Text>
                       :
                       null
                   }

                   {
                   this.state.show?
                   <TextInput style={styles.TextInput} value={this.state.password} onChangeText={this.onChange}></TextInput>
                   :
                   null
                   }

                   {
                   this.state.show?
                   <TouchableOpacity style={styles.DeleteButton} onPress={this.Delete}>
                   <Text style={styles.ButtonText}>C O N F I R M</Text>
                   </TouchableOpacity>
                   :
                   null
                   }

                </View>
            <SafeAreaView/>
        </>
        )
    }
            
            
}
const styles = StyleSheet.create({
    Body:{ 
       
    },
    Heading:{
      fontSize:33,
      fontWeight:"700",
      textAlign:'center'
    },
    TextBody:{
        fontSize:19,
        fontWeight:"500",
        textAlign:'center'
    },
    Buttons:{
        position:'relative',
        height:50,
        width:150,
        paddingTop:15,
        paddingBottom:15,
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#1C71BA',
        borderRadius:50

    },
    DeleteButton:{
        position:'relative',
        height:50,
        width:150,
        paddingTop:15,
        paddingBottom:15,
        marginTop:10,
        marginLeft:120,
        marginRight:30,
        backgroundColor:'black',
        borderRadius:50
    },
    ButtonText:{
        textAlign:'center',
        fontSize:15,
        fontWeight:"700",
        color:'white',
    },
    TextInput:{
        height: 50,
        width: 300, 
        marginLeft:45,
        borderColor: 'black',
        borderWidth: 2.5,
        borderRadius: 17,
        backgroundColor:'#ffffff',
    },
    PasswordText:{
        fontSize:19,
        fontWeight:"700",
        textAlign:'center'
    }
})