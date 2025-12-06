import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Section4() {
  return (
    <View style={{ borderTopWidth: 1, borderBottomWidth: 1 }}>
      <View style={{ padding:30 }}>
        <Text style={{ fontSize: 25 }}>Hotel Description</Text>
        <Text style={{ color: "#444444",padding : 10 }}>
          218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}
