import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center"
                }}>
            <TouchableOpacity style={{color:'yellow', borderColor:'grey', justifyContent: "left", 
              }} onPress={() =>{
                 this.props.navigation.navigate("Home")
                }}>
                <Text style={{textAlign:'center', color:"blue", fontWeight:'bold',
                  fontSize:40, marginLeft:25, marginRight:25}}>  Back </Text>
                </TouchableOpacity>

                <Text style={{marginTop:30}}>SpaceCraft Screen!</Text>
            </View>
        )
    }
}