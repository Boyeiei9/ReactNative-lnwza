import React from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import { LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';

export default function Chart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2
            }
        ],
        legend: ["Rainy Days"]
    };

    const pieData = [
        { name: 'Red', population: 45, color: '#F44336', legendFontColor: '#7F7F7F', legendFontSize: 14 },
        { name: 'Blue', population: 25, color: '#2196F3', legendFontColor: '#7F7F7F', legendFontSize: 14 },
        { name: 'Yellow', population: 15, color: '#FFEB3B', legendFontColor: '#7F7F7F', legendFontSize: 14 },
        { name: 'Green', population: 15, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 14 }
    ];

    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <Text style={{ fontSize: 20 }}>Bezier Line Chart</Text>
            <LineChart
                data={data}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{ marginVertical: 10, borderRadius: 15 }}
            />

            <Text style={{ fontSize: 20, marginTop: 10 }}>Pie Chart</Text>
            <PieChart
                data={pieData}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'15'}
                absolute
                style={{ marginVertical: 10 }}
            />

            <Text style={{ fontSize: 20, marginTop: 10 }}>Progress Chart</Text>
            <ProgressChart
                data={{ data: [0.6, 0.4, 0.8] }}
                width={screenWidth - 20}
                height={150}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
                style={{ marginVertical: 10 }}
            />
        </ScrollView>
    );
}

