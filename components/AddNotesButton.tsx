import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function AddNotesButton() {
  return (
    <Pressable
      style={({ pressed }) => ({
        position: "absolute",
        backgroundColor: Colors.dark.tint,
        width: 58,
        height: 58,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        right: 17,
        zIndex: 9999,
        transform: [{ scale: pressed ? 0.94 : 1 }],
        shadowColor: Colors.dark.tint,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 12,
        elevation: 10,
      })}
      onPress={() => router.push("/notes/addNote")}
    >
      <Ionicons size={28} name="add" color="#fff" />
    </Pressable>
  );
}
