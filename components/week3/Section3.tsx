import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section3() {
    return (
            <View style={{ flexDirection : "row", alignItems : "center",padding : 30 }}>
                <View style={{ height : 50, width : 50, borderRadius : 50/2, backgroundColor : '#e44506ff' , justifyContent : 'center', alignItems : 'center' }}>
                    <Text style={{ fontSize : 20, color : 'white' }}>9.5</Text>
                </View>
                
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 30, color: "red" }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>
    );
}
