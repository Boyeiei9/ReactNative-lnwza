import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ borderTopWidth : 1 , borderBottomWidth : 1 }}>
            
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 30, color: "red" }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            
        </View>
    );
}
