import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { registerRootComponent } from 'expo';


import Navigation from "@/navigation/auth";
import { AuthProvider } from "@/providers/AuthProvider";




const App = () => {
    return (
        <PaperProvider>
            <AuthProvider>
                <Navigation />
                <StatusBar style="auto" />
            </AuthProvider>
        </PaperProvider>
    );
}

registerRootComponent(App);

export default App;