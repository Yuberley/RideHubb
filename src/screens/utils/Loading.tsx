import React from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";

export default function () {
    return (
        <View>
            <View
                style={{
                    marginTop: Dimensions.get("window").height / 2,
                }}
            >
                <ActivityIndicator size="large" color={'#047957'} />
            </View>
        </View>
    );
}