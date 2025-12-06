import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setDescription] = useState("");


    console.log("STATE : ", weight, height, bmi);

    // const onPressButton = () => {
    //     console.log("Calculate button is pressed!!!");
    //     const w = parseFloat(weight);
    //     const h = parseFloat(height);
    //     let output = (w / (h / 100 * h / 100));
    //     setBmi(output.toFixed(2));
    // };

    const onPressButton = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);

        let thisBMI = w / ((h / 100) * (h / 100));
        let result = thisBMI.toFixed(2);

        setBmi(result);


        let desc = "";

        if (thisBMI < 18.5)
            desc = "Underweight - eat a bagel!";
        else if (thisBMI >= 18.5 && thisBMI <= 24.99)
            desc = "Normal - keep it up!";
        else if (thisBMI >= 25 && thisBMI <= 29.99)
            desc = "Overweight - exercise more!";
        else if (thisBMI >= 30 && thisBMI <= 39.99)
            desc = "Obese - get off the couch!";
        else
            desc = "Morbidly Obese - take action!";

        setDescription(desc);
    };



    return (
        <View>
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }} >
                <Text style={{ fontSize: 20 }}> Weight (KG.)</Text>
                <TextInput keyboardType="numeric" placeholder="Input your weight" value={weight} onChangeText={(newWeight) => setWeight(newWeight)} />
            </View>
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }} >
                <Text style={{ fontSize: 20 }}> Height (cm.)</Text>
                <TextInput keyboardType="numeric" placeholder=" Input your Height" value={height} onChangeText={(newHeight) => setHeight(newHeight)} />
            </View>
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>{description}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            {/* <Button title="Calculate" onPress={onPressButton} /> */}

            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
