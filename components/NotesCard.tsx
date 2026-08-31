import { Notes } from "@/constants/notes";
import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import NoteIcon from "./NoteIcon";
import PinnedIcon from "./PinnedIcon";

export default function NotesCard({ noteDetails }: { noteDetails: Notes }) {
  const categoryColor = categories.find(
    (categ) => categ.name === noteDetails.category.name,
  );

  return (
    <Pressable
      style={({ pressed }) => ({
        width: 170,
        minHeight: 200,
        borderRadius: 16,
        backgroundColor: pressed ? "#1e242d" : "#181d24",
        paddingVertical: 14,
        paddingHorizontal: 14,
        transform: [{ scale: pressed ? 0.97 : 1 }],
        borderWidth: 1,
        borderColor: pressed
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0.06)",
        flexGrow: 1,
      })}
      onPress={() => router.push(`/notes/${noteDetails.id}`)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <NoteIcon
          noteIcon={noteDetails.category.icon}
          color={categoryColor?.color}
        />
        {noteDetails?.pinned && <PinnedIcon />}
      </View>

      <Text
        style={{
          color: Colors.dark.text,
          fontWeight: "700",
          fontSize: 15,
          lineHeight: 21,
          marginBottom: 6,
          letterSpacing: -0.2,
        }}
        numberOfLines={2}
      >
        {noteDetails.title}
      </Text>

      <Text
        style={{
          color: Colors.dark.disabledText,
          fontWeight: "500",
          marginBottom: 10,
          fontSize: 11,
          letterSpacing: 0.1,
        }}
      >
        {noteDetails.time}
      </Text>

      <Text
        style={{
          color: Colors.dark.placeholderText,
          fontWeight: "400",
          fontSize: 12,
          lineHeight: 18,
          flex: 1,
        }}
        numberOfLines={5}
        ellipsizeMode="tail"
      >
        {noteDetails.description}
      </Text>
    </Pressable>
  );
}
