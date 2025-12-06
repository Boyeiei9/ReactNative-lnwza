import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {

  const [count, setCount] = useState(0);

  return (
    <View style={{ flexDirection: "row",padding :20 ,justifyContent : "space-around" }}>

      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <FontAwesome name="heart" size={60} color="yellow" />
      </TouchableOpacity>

      <Text style={{ fontSize: 40, marginTop:10 }}>
        {count}
      </Text>

    </View>
  );
}
