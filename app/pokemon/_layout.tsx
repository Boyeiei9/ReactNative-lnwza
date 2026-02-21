import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function PokemonTabLayout() {
  return (
    <Tabs screenOptions={{ 
        headerTitle: "Pokemon World", // ชื่อบน Header
        headerShown: true 
    }}>
      <Tabs.Screen
        name="pikachu"
        options={{
          tabBarLabel: "Pikachu",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bolt" color={color} size={size} /> // ไอคอนสายฟ้า
          ),
        }}
      />
      <Tabs.Screen
        name="charmander"
        options={{
          tabBarLabel: "Charmander",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="fire" color={color} size={size} /> // ไอคอนไฟ
          ),
        }}
      />
      <Tabs.Screen
        name="ivysaur"
        options={{
          tabBarLabel: "Ivysaur",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" color={color} size={size} /> // ไอคอนใบไม้
          ),
        }}
      />
    </Tabs>
  );
}