import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flex: 1, marginTop : -100, marginHorizontal : 20 , padding : 20, borderWidth : 1, borderColor : '#000000ff', borderRadius : 20, backgroundColor : '#e0e0e0ff' }}>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 40,textAlign : 'center' }}>Hilton San Francisco</Text>
            </View>
            
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
            </View>
                <Text style={{ margin : 20,fontSize: 15,textAlign : 'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
            


        </View>
    );
}
