import React from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text, Button,StyleSheet,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";

export default class Account extends React.PureComponent {

  constructor(props) {
   super(props)
     this.state = { 
        userGreeting:'',
        firstname: '',
        USERDATA: [{}],
        balance:0.00,
        balmessage:'',
        arr :[]
    }
    
}

GenBal = async() => {
  this.setState({balance:this.state.balance+1})
  var name = await AsyncStorage.getItem('Username');
  this.setState({balmessage: " generated $1"})
  //var final = name.concat(" ",this.state.balmessage)
  this.state.arr.push(name + this.state.balmessage);

}

componentDidMount() {
    this.FetchData();
}

 FetchData = async  ()=>
   {
        var USER = await AsyncStorage.getItem('Username');
        this.setState({ userGreeting : USER});
    }
       
    render() {
        return (
    <>
        <ScrollView>
           <SafeAreaView style={{flex:0.040}}></SafeAreaView>
            <View style={{backgroundColor:'white'}}>
                 <View style={{flexDirection:'row'}}>
                        <Icon name="ios-contacts" size={35} style={styles.IconStyle1} onPress={()=>this.props.navigation.navigate('AddFriend')}/>
                        <Icon name="md-settings" size={30} style={styles.IconStyle} onPress={()=>this.props.navigation.navigate('AccountSettings')}/>
                  </View>
                  <Text style={styles.Welcome}>{"\n\n\n"}Welcome {this.state.userGreeting}{"\n"}</Text>
                <View style={styles.Balance}>
                    <Text style={styles.BalanceText}>
                      Balance: ${this.state.balance}.00
                    </Text>
                </View>
                <Text>{"\n\n"}</Text>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity style={styles.Buttons} onPress={()=>this.props.navigation.navigate('SendCash')}>
                        <Text style={styles.ButtonText}>
                         SEND
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons} onPress={()=>this.props.navigation.navigate('ReqCash')}>
                         <Text style={styles.ButtonText}>
                         REQUEST
                         </Text>
                    </TouchableOpacity >
                </View>
                <Text>{"\n\n"}</Text>
                <View style={styles.Transaction}>
                    <Text style={styles.TransactionHead}>
                      Transacational History
                    </Text>
                    <Text style={styles.TransactionText}>
                      {this.state.arr + "\n"}
                      
                    </Text>
                      
                </View>
                <Text>{"\n"}</Text>
                <TouchableOpacity style={styles.GenerateButton} onPress={this.GenBal}>
                    <Text style={styles.ButtonText}>
                        G E N E R A T E
                    </Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView></SafeAreaView>
        </ScrollView>
    </>
            
  )}
}
const styles = StyleSheet.create({

Welcome: {
  marginTop:10,
  marginLeft:20,
  fontSize:20,
  fontWeight: '700',
},
Balance: {
    height:150,
    width:370,
    marginLeft:20,
    marginRight:50,
    borderRadius:40,
    borderColor:'black',
    backgroundColor:'#D7D2D2',
},
BalanceText:{
    marginTop:50,
    fontSize: 31,
    color: 'black',
    textAlign:"center",
    fontWeight: '700',
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
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#1C71BA',
    borderRadius:50,
    borderColor: '#F150D8'
},
IconStyle: {
    marginLeft:365,
    marginTop:10,
    position:'absolute',
    
},
IconStyle1: {
    marginLeft:20,
    marginTop:10,
},
Transaction: {
    height:270,
    width:370,
    marginLeft:20,
    marginRight:50,
    borderRadius:10,
    borderColor:'black',
    backgroundColor:'#D7D2D2',
    overflow:'hidden'
},
TransactionHead:{
    marginTop:20,
    fontSize: 21,
    color: 'black',
    textAlign:"center",
    fontWeight: '700',
},
TransactionText:{
    marginTop:20,
    fontSize: 24,
    color: 'black',
    textAlign:"center",
    fontWeight: '700',
},
GenerateButton:{
    height:50,
    width:160,
    paddingTop:15,
    paddingBottom:15,
    marginTop:10,
    marginLeft:120,
    marginRight:20,
    backgroundColor:'#F150D8',
    borderRadius:50,
    borderColor: '#F150D8',
}

})