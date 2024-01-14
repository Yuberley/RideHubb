import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Button from '@/components/Button';


const App = () => {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Button />
                <StatusBar style="auto" />
            </View>
        </PaperProvider>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
