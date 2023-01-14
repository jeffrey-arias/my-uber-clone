import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Map from './screens/Map';
import { store } from './store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="HomeScreen"
                            component={Home}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="MapScreen"
                            component={Map}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                    <Home />
                </SafeAreaProvider>
                <View style={styles.container}></View>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
