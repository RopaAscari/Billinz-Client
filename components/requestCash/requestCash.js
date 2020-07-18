import React from 'react';
import {View,StyleSheet,Text,SafeAreaView, Alert} from 'react-native';
import axios from 'axios';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeConsumer } from 'react-native-elements';

export default class reqCash extends React.Component{

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <>
                <View>
                    <Text>Request Cash</Text>
                    
                </View>
            </>
        )
    }
}