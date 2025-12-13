import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Upcoming Event</Text>
            <Text style={{ color: "grey" }}>Let find out what most interesting things</Text>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 200, height: 150, borderRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ flexDirection: "row", marginRight: 10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <View style={{  marginTop : -5,height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
                                        <Text style={{ fontSize: 20, color: "white" }}>Tour in Somewhere</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={(item: any) => item.id}
            />
        </View>
    );
}


