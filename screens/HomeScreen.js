import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{
                        uri: 'https://logo-download.com/wp-content/data/images/png/Uber-logo.png',
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
}
