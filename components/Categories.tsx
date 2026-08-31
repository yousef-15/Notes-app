import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

export default function Categories({ categoryName }: { categoryName: string }) {
  return (
    <Pressable
      onPress={() => router.push(`../category/${categoryName}`)}
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#232a35" : "#1a2030",
        height: 38,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
        transform: [{ scale: pressed ? 0.97 : 1 }],
        marginRight: 8,
      })}
    >
      <Text
        style={{
          color: Colors.dark.secondaryText,
          fontSize: 13,
          fontWeight: "600",
          letterSpacing: 0.2,
        }}
      >
        {categoryName}
      </Text>
    </Pressable>
  );
}
