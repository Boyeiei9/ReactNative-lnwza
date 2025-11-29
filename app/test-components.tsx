import React from 'react';
import { ScrollView, TextInput } from 'react-native';


export default function TestComponent() {
  return (
    <ScrollView  style={{ margin : 20 }} >
        <TextInput
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={30}
  multiline={false}
  placeholder="Please enter your email"
  returnKeyType="next"
  onChangeText={(text)=>{}}
  defaultValue="Default text"
/>


    </ScrollView>
  );
}
