import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ReviewScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* คะแนนรวม */}
      <View style={styles.headerBox}>
        <Text style={styles.bigScore}>4.7</Text>
        <Text style={styles.outOf}>out of 5</Text>

        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <FontAwesome name="star" size={22} color="#f5a623" />
          <FontAwesome name="star" size={22} color="#f5a623" />
          <FontAwesome name="star" size={22} color="#f5a623" />
          <FontAwesome name="star" size={22} color="#f5a623" />
          <FontAwesome name="star-half-full" size={22} color="#f5a623" />
        </View>

        <Text style={styles.totalRatings}>25 Ratings</Text>
      </View>

      {/* แถบเปอร์เซ็นต์ */}
      <View style={{ marginBottom: 25 }}>

        {/* 5 ดาว */}
        <View style={styles.row}>
          <Text style={styles.starText}>⭐⭐⭐⭐⭐</Text>
          <View style={styles.barContainer}>
            <View style={[styles.barFill, { width: "85%" }]} />
          </View>
          <Text style={styles.percent}>85%</Text>
        </View>

        {/* 4 ดาว */}
        <View style={styles.row}>
          <Text style={styles.starText}>⭐⭐⭐⭐</Text>
          <View style={styles.barContainer}>
            <View style={[styles.barFill, { width: "10%" }]} />
          </View>
          <Text style={styles.percent}>10%</Text>
        </View>

        {/* 3 ดาว */}
        <View style={styles.row}>
          <Text style={styles.starText}>⭐⭐⭐</Text>
          <View style={styles.barContainer}>
            <View style={[styles.barFill, { width: "3%" }]} />
          </View>
          <Text style={styles.percent}>3%</Text>
        </View>

        {/* 2 ดาว */}
        <View style={styles.row}>
          <Text style={styles.starText}>⭐⭐</Text>
          <View style={styles.barContainer}>
            <View style={[styles.barFill, { width: "1%" }]} />
          </View>
          <Text style={styles.percent}>1%</Text>
        </View>

        {/* 1 ดาว */}
        <View style={styles.row}>
          <Text style={styles.starText}>⭐</Text>
          <View style={styles.barContainer}>
            <View style={[styles.barFill, { width: "1%" }]} />
          </View>
          <Text style={styles.percent}>1%</Text>
        </View>

      </View>

      {/* รีวิวที่ 1 */}
      <View style={styles.review}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Grigory Kozhukov</Text>

          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
          </View>

          <Text style={styles.comment}>Nice Place</Text>
          <Text style={styles.detail}>
            Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in
            Tokyo. Located in one of the uprising areas of Tokyo
          </Text>
        </View>

        <Text style={styles.date}>Jun 2018</Text>
      </View>

      {/* รีวิวที่ 2 */}
      <View style={styles.review}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/2.jpg" }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Ea Tipene</Text>

          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star" size={16} color="#f5a623" />
            <FontAwesome name="star-o" size={16} color="#f5a623" />
          </View>

          <Text style={styles.comment}>Great for families</Text>
          <Text style={styles.detail}>
            Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in
            Tokyo. Located in one of the uprising areas of Tokyo
          </Text>
        </View>

        <Text style={styles.date}>Jun 2018</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  headerBox: {
    alignItems: "center",
    marginBottom: 25,
  },
  bigScore: {
    fontSize: 52,
    fontWeight: "bold",
  },
  outOf: {
    fontSize: 16,
    color: "#444",
  },
  totalRatings: {
    fontSize: 13,
    color: "#777",
    marginTop: 5,
  },

  /* แถบเปอร์เซ็นต์ */
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  starText: {
    width: 70,
    fontSize: 13,
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  barFill: {
    height: 8,
    backgroundColor: "#f5a623",
    borderRadius: 5,
  },
  percent: {
    width: 40,
    fontSize: 12,
    textAlign: "right",
  },

  /* รีวิว */
  review: {
    flexDirection: "row",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  comment: {
    marginTop: 5,
    fontWeight: "600",
    fontSize: 14,
  },
  detail: {
    marginTop: 4,
    fontSize: 12,
    color: "#555",
    width: "90%",
  },
  date: {
    fontSize: 11,
    color: "#777",
    marginLeft: 10,
  },
});
