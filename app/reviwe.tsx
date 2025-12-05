import React from 'react';
import { ScrollView,  View } from 'react-native';
import Extra from '@/components/week3/Extra';


export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                 <Extra />                           
            </View>
        </ScrollView>
    );
}
