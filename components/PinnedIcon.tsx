import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PinnedIcon() {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(251,191,36,0.12)",
      }}
    >
      <Ionicons size={21} name="pin" color="#FBBF24" />
    </View>
  );
}
