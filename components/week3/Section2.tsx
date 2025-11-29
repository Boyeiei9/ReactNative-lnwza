import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ marginTop :-80, padding: 10, borderWidth: 1, borderColor: 'gray',backgroundColor :'rgb(255, 255, 255)',borderRadius: 20 }}>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 40,textAlign : 'center' }}>Hilton San Francisco</Text>
            </View>
            {/* View ก้อนที่ 4 */}
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
