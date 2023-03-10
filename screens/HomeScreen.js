import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import NavFavorites from '../components/NavFavorites';

export default function HomeScreen() {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <View style={tw`flex flex-row flex-wrap`}>
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
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMI9s8IRwlD5M87oNcAWOzT5rMggbWRTgng&usqp=CAU',
                        }}
                        style={{
                            width: 50,
                            height: 100,
                            resizeMode: 'contain',
                        }}
                    />
                    <Text
                        style={tw`absolute bottom-0 pb-3 pl-10 text-gray-500 text-xs`}
                    >
                        By: Jeffrey Arias
                    </Text>
                </View>

                <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );
                        dispatch(setDestination(null));
                    }}
                />
                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    );
}
