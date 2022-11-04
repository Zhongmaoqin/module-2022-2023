import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function First({ navigation }) {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 50,
      }}
    >
      <TouchableOpacity
        style={{
          marginBottom: 50,
        }}
        onPress={() => {
          navigation.navigate("Second");
        }}
      >
        <Text
          style={{
            color: "blue",
          }}
        >
          GO TO Second
        </Text>
      </TouchableOpacity>
      <Text>zhongmaoqin</Text>
      <Text>kp04</Text>
    </View>
  );
}

export default First;
