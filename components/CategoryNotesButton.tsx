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
        height: 64,
        borderRadius: 14,
        backgroundColor: pressed ? "#1e242d" : "#181d24",
        paddingVertical: 12,
        paddingHorizontal: 14,
        transform: [{ scale: pressed ? 0.98 : 1 }],
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
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
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <NoteIcon noteIcon={icon} color={color} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: Colors.dark.text,
              letterSpacing: -0.1,
            }}
          >
            {name}
          </Text>
        </View>
        <Ionicons
          size={20}
          name="chevron-forward"
          color={Colors.dark.disabledText}
        />
      </View>
    </Pressable>
  );
}
