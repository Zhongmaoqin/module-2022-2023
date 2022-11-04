import * as React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

function Second() {
  const [num, setNum] = useState(0);

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setNum((pre) => {
              return pre + 1;
            });
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            first
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 30,
          }}
          onPress={() => {
            setNum((pre) => {
              return pre - 1;
            });
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            second
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNum(0);
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            third
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {num}
      </Text>
    </View>
  );
}

export default Second;
