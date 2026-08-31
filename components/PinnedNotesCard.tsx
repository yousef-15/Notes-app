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
        borderRadius: 16,
        backgroundColor: pressed ? "#1e242d" : "#181d24",
        paddingVertical: 14,
        paddingHorizontal: 14,
        transform: [{ scale: pressed ? 0.98 : 1 }],
        borderWidth: 1,
        borderColor: pressed
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0.06)",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
      })}
    >
      <NoteIcon
        noteIcon={noteDetails.category.icon}
        color={categoryColor?.color}
      />
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text style={styles.title} numberOfLines={1}>
          {noteDetails.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginBottom: 6,
          }}
        >
          <View
            style={{
              backgroundColor: categoryColor?.color + "22",
              borderRadius: 6,
              paddingHorizontal: 7,
              paddingVertical: 2,
            }}
          >
            <Text style={[styles.time_cat, { color: categoryColor?.color }]}>
              {noteDetails.category.name}
            </Text>
          </View>
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
  title: {
    color: Colors.dark.text,
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
    letterSpacing: -0.2,
  },
  time_cat: {
    color: Colors.dark.disabledText,
    fontWeight: "500",
    fontSize: 11,
  },
  desc: {
    color: Colors.dark.placeholderText,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 17,
  },
});
