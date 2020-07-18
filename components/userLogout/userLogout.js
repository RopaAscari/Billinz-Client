import React from 'react';
import{Text,View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function Logout(navigation) {

        AsyncStorage.removeItem('UserToken',(err)=> {
            if(err){
                console.log("Error removing token")
            }
            else{
                console.log("Success, user logged out")
               navigation.navigate('Login')
            }
        })
    }

