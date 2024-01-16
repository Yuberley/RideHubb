import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#007468' // #007468  #047957
          }}
        >Ride
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#000'
            }}
          >Hubb</Text>
        </Text>
      </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})