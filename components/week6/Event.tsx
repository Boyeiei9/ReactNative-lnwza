import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
    const [onlineTours, setOnlineTours] = useState<any[]>([]);

    const loadOnlineTours = async () => {
        try {
            let text = await fetch(
                "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
            );
            let data = await text.json();
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    };

    useEffect(() => {
        loadOnlineTours();
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Upcoming Event
            </Text>
            <Text style={{ color: "grey", marginBottom: 10 }}>
                Let find out what most interesting things
            </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={onlineTours}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginRight: 15, width: 220 }}>
                            <Image
                                source={{ uri: item.uri }}
                                style={{ width: "100%", height: 140, borderTopLeftRadius: 12, borderTopRightRadius: 12, }} />
                            <View
                                style={{ flexDirection: "row", borderWidth: 1, borderColor: "#ddd", borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: "#fff", }}>
                                <View
                                    style={{ padding: 10, width: 60, alignItems: "center", justifyContent: "center", borderRightWidth: 1, borderRightColor: "#eee", }}>
                                    <Text style={{ fontSize: 12, color: "red", fontWeight: "bold", }}>DEC</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", }}>{item.date}</Text>
                                </View>
                                <View style={{ padding: 10, flex: 1 }}>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", }} numberOfLines={1}>{item.title}</Text>
                                    <Text style={{ fontSize: 12, color: "grey" }}>{item.time}</Text>
                                    <Text style={{ fontSize: 12, color: "grey" }}>{item.place}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}
