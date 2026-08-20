import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function NoteIcon({
  noteIcon,
}: {
  noteIcon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(34,197,94,0.1)",
      }}
    >
      <Ionicons size={22} name={noteIcon} color="rgba(34,197,94,0.6)" />
    </View>
  );
}
