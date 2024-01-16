import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function () {
  return (
    <View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={'#047957'} />
        {/* <Text style={{ marginTop: 10 }}>Loading...</Text> */}
      </View>
    </View>
  );
}