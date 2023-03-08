import React, { useRef, useEffect } from 'react';
import { Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {
    selectDestination,
    selectOrigin,
    setTravelTimeInformation,
} from '../slices/navSlice';
import { GOOGLE_MAPS_API_KEY } from '@env';

export default function Map() {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();
    const mapRef = useRef(null);

    useEffect(() => {
        if (origin && destination) {
            mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
                edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
            });
        }
    }, [origin, destination]);

    useEffect(() => {
        const getTravelTime = async () => {
            if (origin && destination) {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`
                );
                const data = await response.json();
                console.log(
                    'DATA__________' + JSON.stringify(data.rows[0].elements[0])
                );
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            }
        };

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_API_KEY]);

    return (
        <MapView
            ref={mapRef}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            style={tw`flex-1`}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
}
