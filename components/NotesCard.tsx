import { View, Text, Pressable } from "react-native";
import React from "react";
import { Notes } from "@/constants/notes";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import NoteIcon from "./NoteIcon";
import PinnedIcon from "./PinnedIcon";
import { categories } from "@/constants/notesData";

export default function NotesCard({ noteDetails }: { noteDetails: Notes }) {
  const categoryColor = categories.find(
    (categ) => categ.name === noteDetails.category.name,
  );
  // console.log(categoryColor);

  return (
    <Pressable
      style={({ pressed }) => ({
        width: 180,
        height: 220,
        borderRadius: 10,
        backgroundColor: pressed ? "#1d232b" : "#171b21be",
        paddingVertical: 10,
        paddingHorizontal: 10,
        transform: [{ scale: pressed ? 0.98 : 1 }],
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
      })}
      onPress={() => router.push(`/notes/${noteDetails.id}`)}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginBottom: 8 }}>
          <NoteIcon
            noteIcon={noteDetails.category.icon}
            color={categoryColor?.color}
          />
        </View>
        {noteDetails?.pinned && <PinnedIcon />}
      </View>
      <Text
        style={{ color: Colors.dark.text, fontWeight: "700", marginBottom: 5 }}
        numberOfLines={2}
      >
        {noteDetails.title}
      </Text>
      <Text
        style={{
          color: Colors.dark.disabledText,
          fontWeight: "500",
          marginBottom: 10,
          fontSize: 12,
        }}
      >
        {noteDetails.time}
      </Text>
      <Text
        style={{
          color: Colors.dark.placeholderText,
          fontWeight: "400",
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
