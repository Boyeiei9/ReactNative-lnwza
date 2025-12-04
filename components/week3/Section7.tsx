import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding : 20,borderBottomWidth: 1  }}>
            {/* View ก้อนที่ 1  */}
            
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 25 }}>Room Type</Text>
                </View>

            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row",margin : 20}}>
                <Image style={{ width : 150,height : 180,borderRadius: 10 }} source={require("@/assets/week3/room-8.jpg")} />

                <View style={{ padding : 20 }}>
                <Text style={{ fontSize : 25 }}>Standard Twin Room</Text>
                <Text style={{ fontSize : 25,color : '#d14920ff',marginTop : 40 }}>$399.99</Text>
                <Text style={{ color : '#35bee7ff',marginTop : 10 }}>Hurry Up! This is your last room!</Text>
            </View>
            </View>
            
            
        </View>    
    );
}
