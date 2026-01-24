import { getLocation } from "@/utils/gps";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps"; // ต้อง import Marker และ Callout เพิ่ม
import { FontAwesome } from "@expo/vector-icons"; // Import ไอคอน
import { useNavigation } from "expo-router";

export default function LocationQuiz() {
  const [location, setLocation] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]); // state สำหรับเก็บข้อมูลจาก API

  const navigation = useNavigation();

  // 1. ตั้งค่า Header Title
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Location Quiz"
    });
  }, [navigation]);

  // 2. ฟังก์ชันดึงตำแหน่งปัจจุบัน (เหมือนเดิม)
  const onLoad = async () => {
    let loc = await getLocation();
    if (loc) {
      setLocation(loc);
    }
  };

  // 3. ฟังก์ชันดึงข้อมูล API (ส่วนที่เพิ่มใหม่)
  const loadUsers = async () => {
    try {
      const response = await fetch("https://ckartisan.com/api/location");
      const data = await response.json();
      setUsers(data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    onLoad();    
    loadUsers(); 
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* ส่วนแสดงข้อมูลด้านบน (คงไว้เหมือนเดิมเพื่อความสวยงาม) */}
      <View style={{ flexDirection: 'row', height: 70, backgroundColor: "#50E3C2" }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>Lat/Lon</Text>
          <Text style={{ textAlign: 'center' }}>{location ? location.coords.latitude.toFixed(4) : "-"}</Text>
          <Text style={{ textAlign: 'center' }}>{location ? location.coords.longitude.toFixed(4) : "-"}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>API Users</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{users.length} คน</Text>
        </View>
      </View>

      {/* ส่วน Map */}
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true} // แสดงจุดสีฟ้าตำแหน่งเรา
          showsMyLocationButton={true}
          region={
            location ? {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            } : undefined
          }
        >
          {/* วนลูปแสดงข้อมูล Users จาก API */}
          {users.map((item) => (
            <Marker
              key={item.id} // ต้องใส่ key เสมอเมื่อใช้ map
              coordinate={{
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
              }}
            >
              {/* --- เปลี่ยน Icon เป็นรูปคน (FontAwesome) --- */}
              <View style={styles.iconContainer}>
                <FontAwesome name="user" size={24} color="white" />
              </View>

              {/* --- แสดงชื่อ user_id เมื่อคลิก (Callout) --- */}
              <Callout>
                <View style={{ padding: 5,width : 150}}>
                  <Text style={{ fontWeight: 'bold' }}>User ID:</Text>
                  <Text>{item.user_id}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
  );
}

// Style สำหรับตกแต่ง Icon ให้ดูสวยขึ้น
const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#FF5733',
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    elevation: 5 // เงา (Android)
  }
});