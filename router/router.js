import 'react-native-gesture-handler';
import React from 'react';


import AddCard from '../components/addCard/addCard';
import Login from '../components/userLogin/userLogin';
import sendCash from '../components/sendCash/sendCash';
import HomeScreen from '../components/homeScreen/home';
import Logout from '../components/userLogout/userLogout'
import addFriend from '../components//addFriend/addFriend';
import Account from '../components/accountInfo/accountMain'
import reqCash from '../components/requestCash/requestCash';
import helpScreen from '../components/helpScreen/helpScreen';
import Register from '../components/userRegister/userRegister';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import aboutScreen from '../components/aboutScreen/aboutScreen';
import UpdateAccount from '../components/updateUser/updateUser';
import viewAccount from '../components/viewAccount/viewAccount';
import deleteAccount from '../components/deleteAccount/deleteAccount';
import TranscationHistory from '../components/transcationHistory/transcationHistory';
import AccountSettings from '../components/accountInfo/accountSettings/accountSettings';

const Stack = createStackNavigator();

export default function Router(){

  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Register"component={Register}/>
        <Stack.Screen name="UpdateAccount" component={UpdateAccount}/>
        <Stack.Screen name="ViewAccount" component={viewAccount}/>
        <Stack.Screen name="DeleteAccount" component={deleteAccount}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Logout}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="AccountSettings" component={AccountSettings}/>
        <Stack.Screen name="AddCard" component={AddCard}/>   
        <Stack.Screen name="AddFriend" component={addFriend}/>
        <Stack.Screen name="SendCash" component={sendCash}/>
        <Stack.Screen name="ReqCash" component={reqCash}/>
        <Stack.Screen name="Help" component={helpScreen}/>
        <Stack.Screen name="About" component={aboutScreen}/>
        <Stack.Screen name="TransactionHistory" component={TranscationHistory}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
