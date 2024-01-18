import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/screens/Home";
import SecondScreen from "@/screens/SecondScreen";

const MainStack = createNativeStackNavigator();
const Main = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="SecondScreen" component={SecondScreen} />
        </MainStack.Navigator>
    );
};

export default Main;