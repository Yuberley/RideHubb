import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from '@/supabase/initSupabase';
import { Button } from 'react-native-paper';

const Home = () => {

  const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			alert(error.message);
		}
	}

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

        <Button
          mode="contained"
          buttonColor='#007468'
          style={{
            // marginVertical: 10,
            // borderRadius: 10,
            // paddingVertical: 5,
            // paddingHorizontal: 10,
            // backgroundColor: '#007468',
            marginTop: 30,
          }}
          onPress={() => logout()}
        >
          Cerrar sesión
        </Button>

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