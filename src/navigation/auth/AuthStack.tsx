import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { 
    LoginScreen,
    RegisterScreen,
    ForgetPasswordScreen
} from "@/screens/auth";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
        </Stack.Navigator>
    );
};