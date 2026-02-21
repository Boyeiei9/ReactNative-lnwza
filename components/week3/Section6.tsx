import React from "react";
import { Image, Text, View } from "react-native";

export default function Section6() {
  return (
    <View style={{ borderBottomWidth: 1 }}>
      <View style={{ padding:30 }}>
        <Text style={{ fontSize: 25 }}>Location</Text>
        <Text style={{ color: "#444444",padding : 10 }}>
          218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
        </Text>
      </View>

      <View style={{ flexDirection : "row",margin : 20}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 5/2 }} source={require("@/assets/week3/map.jpg")} />
      </View>

    </View>
  );
}
