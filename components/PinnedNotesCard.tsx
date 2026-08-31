import { View, Text, Pressable } from "react-native";
import React from "react";
import NoteIcon from "./NoteIcon";
import { Notes } from "@/constants/notes";
import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";
import PinnedIcon from "./PinnedIcon";
import { router } from "expo-router";
import { categories } from "@/constants/notesData";

export default function PinnedNotesCard({
  noteDetails,
}: {
  noteDetails: Notes;
}) {
  const categoryColor = categories.find(
    (categ) => categ.name === noteDetails.category.name,
  );
  return (
    <Pressable
      onPress={() => router.push(`/notes/${noteDetails.id}`)}
      style={({ pressed }) => ({
        height: 130,
        borderRadius: 10,
        backgroundColor: pressed ? "#1d232b" : "#171b21be",
        paddingVertical: 10,
        paddingHorizontal: 10,
        transform: [{ scale: pressed ? 0.98 : 1 }],
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.06)",
        flexDirection: "row",
        gap: 10,
      })}
    >
      <NoteIcon
        noteIcon={noteDetails.category.icon}
        color={categoryColor?.color}
      />
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text style={styles.title}>{noteDetails.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginBottom: 10,
          }}
        >
          <Text style={styles.time_cat}>{noteDetails.category.name}</Text>
          <Text style={styles.time_cat}>{noteDetails.time}</Text>
        </View>
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.desc}>
          {noteDetails.description}
        </Text>
      </View>
      <PinnedIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: { color: Colors.dark.text, fontWeight: "700", marginBottom: 5 },
  time_cat: {
    color: Colors.dark.disabledText,
    fontWeight: "500",
    fontSize: 12,
  },
  desc: {
    color: Colors.dark.placeholderText,
    fontWeight: "400",
    fontSize: 12,
  },
});
