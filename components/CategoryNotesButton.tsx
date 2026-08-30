import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import NoteIcon from "./NoteIcon";
import { router } from "expo-router";

export default function CategoryNotesButton({
  name,
  icon,
  color,
}: {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}) {
  return (
    <Pressable
      onPress={() => router.push(`../category/${name}`)}
      style={({ pressed }) => ({
        height: 60,
        borderRadius: 10,
        backgroundColor: pressed ? "#161a1f" : "#171b21be",
        paddingVertical: 10,
        paddingHorizontal: 10,
        transform: [{ scale: pressed ? 0.98 : 1 }],
        marginBottom: 3,
        flexDirection: "row",
        alignItems: "center",
      })}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <NoteIcon noteIcon={icon} color={color} />
          <Text style={{ fontSize: 16, color: Colors.dark.text }}>{name}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons size={21} name="chevron-forward" color={Colors.dark.text} />
        </View>
      </View>
    </Pressable>
  );
}
