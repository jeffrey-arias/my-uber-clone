import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function Home() {
    return (
        <SafeAreaView>
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
            </View>
        </SafeAreaView>
    )
}
