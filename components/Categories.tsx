import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";

export default function Categories({ categoryName }: { categoryName: string }) {
  return (
    <Pressable
      style={{
        backgroundColor: "#171b21be",
        width: "auto",
        height: 48,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: Colors.dark.secondaryText,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        {categoryName}
      </Text>
    </Pressable>
  );
}
