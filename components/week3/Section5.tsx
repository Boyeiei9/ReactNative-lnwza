import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";


export default function Section5() {
  return (
    <View style={{  borderBottomWidth: 1,padding : 20 }}>
      <View style={{ flexDirection : "row", marginTop : 1  }}>
        <MyIcon title="wifi" name="wifi" size={30} color="#318fc5ff" />
        <MyIcon title="coffee" name="coffee" size={30} color="#318fc5ff" />
        <MyIcon title="bath" name="bath" size={30} color="#318fc5ff" />
        <MyIcon title="car" name="car" size={30} color="#318fc5ff" />
        <MyIcon title="paw" name="paw" size={30} color="#318fc5ff" />
      </View>
    </View>
  );
}
