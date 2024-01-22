import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { registerRootComponent } from 'expo';
import { AuthProvider } from "@/providers/AuthProvider";
import Navigation from "@/navigation/auth";
import { Provider } from 'react-redux';
import { store } from '@/context/store';



const App = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <AuthProvider>
                    <Navigation />
                    <StatusBar style="auto" />
                </AuthProvider>
            </PaperProvider>
        </Provider>
    );
}

registerRootComponent(App);

export default App;