import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Home from './screens/Home'
import { store } from './store'

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <Home />
            </SafeAreaProvider>
            <View style={styles.container}></View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
