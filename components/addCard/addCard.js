import React from 'react';
import{ Text, View, StyleSheet,SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";

export default class AddCard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }     
        _onChange => form => console.log(form);
    }

   

   render() {
        return(
        <>
            <SafeAreaView style={{flex:0.1}}/>
            <View>
                <CreditCardInput onChange={this._onChange} />
                <TouchableOpacity style={styles.AddCardButton} onPress={this._onChange}>
                        <Text style={styles.AddCardText}>
                         ADD  CARD
                        </Text>
                    </TouchableOpacity>
            </View>  
            <SafeAreaView style={{flex:0.1}}/>
        </>
          ) 
    }
}

const styles = StyleSheet.create({
    AddCardText: {
        fontSize: 12,
        color: 'white',
        textAlign:"center",
        fontWeight: '700',
    },
    AddCardButton:{
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
})