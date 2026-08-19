import { View, Text, Pressable } from "react-native";
import React from "react";
import { Notes } from "@/constants/notes";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function NotesCard({ noteDetails }: { noteDetails: Notes }) {
  return (
    <Pressable
      style={{
        width: 180,
        height: 220,
        borderRadius: 10,
        backgroundColor: "#171b21be",
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
      onPress={() => router.push(`/notes/${noteDetails.id}`)}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(34,197,94,0.1)",
            marginBottom: 8,
          }}
        >
          <Ionicons
            size={22}
            name={noteDetails.icon}
            color="rgba(34,197,94,0.6)"
          />
        </View>
        {noteDetails?.pinned && (
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
        )}
      </View>
      <Text
        style={{ color: Colors.dark.text, fontWeight: "900", marginBottom: 5 }}
      >
        {noteDetails.title}
      </Text>
      <Text
        style={{
          color: Colors.dark.disabledText,
          fontWeight: "900",
          marginBottom: 10,
          fontSize: 12,
        }}
      >
        {noteDetails.time}
      </Text>
      <Text
        style={{
          color: Colors.dark.placeholderText,
          fontWeight: "900",
          fontSize: 12,
          flex: 1,
        }}
        numberOfLines={6}
        ellipsizeMode="tail"
      >
        {noteDetails.description}
      </Text>
    </Pressable>
  );
}
