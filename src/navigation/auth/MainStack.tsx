import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "@/screens/SecondScreen";

const MainTabs = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>MainTabs</Text>
        </View>
    );
}

const MainStack = createNativeStackNavigator();
const Main = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="MainTabs" component={MainTabs} />
            <MainStack.Screen name="SecondScreen" component={SecondScreen} />
        </MainStack.Navigator>
    );
};

export default Main;