import { View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function NoteIcon({
  noteIcon,
  color,
}: {
  noteIcon: keyof typeof Ionicons.glyphMap;
  color: string | undefined;
}) {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color + "33",
      }}
    >
      <Ionicons size={22} name={noteIcon} color={color} />
    </View>
  );
}
