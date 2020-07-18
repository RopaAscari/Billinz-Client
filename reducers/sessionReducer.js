import React from 'react';
import Alert from 'react-native'
import sessionTimeout from '../actions/sessionAction';
import Logout from '../components/userLogout/userLogout';
 
const sessionReducer = (state = true,action) => {
    switch(action.type){ 

    case "SESSION": {
        if(action.payload.status === null) {
            Alert.alert("User session has expired...")
            Logout()
        }
        else {
            return {...state}
        }
    } 
        
    default: 
        return state;   
    }
}
export default sessionReducer;