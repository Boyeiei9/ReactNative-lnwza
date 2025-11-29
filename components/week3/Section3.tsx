import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View >
            <View style={{ flexDirection: "row",padding : 20}}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2,backgroundColor :'rgb(253, 124, 49)' }} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 30, color: "red" }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>



        </View>
    );
}
