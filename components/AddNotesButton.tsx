import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function AddNotesButton() {
  return (
    <Pressable
      style={{
        position: "absolute",
        backgroundColor: Colors.dark.tint,
        width: 60,
        height: 60,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        bottom: 15,
        right: "45%",
        zIndex: 9999,
      }}
    >
      <Ionicons size={40} name="add" color={Colors.dark.text} />
    </Pressable>
  );
}
