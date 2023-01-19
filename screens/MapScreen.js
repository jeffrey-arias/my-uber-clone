import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';

export default function MapScreen() {
    return (
        <SafeAreaView>
            <View>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>
                <View style={tw`h-1/2`}></View>
            </View>
        </SafeAreaView>
    );
}
