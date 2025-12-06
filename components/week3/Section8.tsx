import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
export default function Section8() {

    return (         
        <View style={{ padding : 20,flexDirection : "row", justifyContent : "space-between", marginTop : 10,borderBottomWidth: 1  }}>
            <View style={{ flexDirection : "column" }}>
                    
                    <Text style={{ fontSize : 15 }}>Price</Text>
                    <Text style={{ fontSize : 25,color : '#e04515ff' }}>$399.99</Text>
                    <Text style={{ fontSize : 15 }}>AVG/Night</Text>
            </View>
                <View >
                    <Button title="Book Now" color='#e04515ff' />
                </View>
            
        </View>  
    );
}
