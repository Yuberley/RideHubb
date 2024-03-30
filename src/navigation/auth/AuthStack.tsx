import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/screens/auth/LoginScreen";
import RegisterScreen from "@/screens/auth/RegisterScreen";
import ForgetPasswordScreen from "@/screens/auth/ForgetPasswordScreen";

const AuthStack = createNativeStackNavigator();

const Auth = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        </AuthStack.Navigator>
    );
};

export default Auth;