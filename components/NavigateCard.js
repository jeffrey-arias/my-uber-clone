import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';

export default function NavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hello, Iza</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                    placeholder="Where to?"
                    debounce={400}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    returnKeyType={'search'}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    styles={toInputBoxStyles}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );
                        navigation.navigate('RideOptionsCard');
                    }}
                />
            </View>
            <NavFavorites />
            <View>
                <TouchableOpacity style={tw`flex-row bg-black w-24 `}>
                    <Icon
                        name="car"
                        type="font-awesome"
                        color="white"
                        size={16}
                    >
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </Icon>
                </TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
