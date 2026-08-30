import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNotes } from "@/context/NotesContext";
import { Colors } from "@/constants/theme";
import { categories } from "@/constants/notesData";
import NotesCard from "@/components/NotesCard";
import { Notes } from "@/constants/notes";

export default function CategoryNotes() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { notes } = useNotes();

  const categoryMeta = categories.find(
    (c) => c.name.toLowerCase() === name?.toLowerCase(),
  );

  const filteredNotes = notes.filter(
    (note: Notes) => note.category.name.toLowerCase() === name?.toLowerCase(),
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0F1115", paddingHorizontal: 16 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => ({
            width: 42,
            height: 42,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.05)",
            transform: [{ scale: pressed ? 0.95 : 1 }],
          })}
        >
          <Ionicons
            size={24}
            name="chevron-back"
            color={Colors.dark.secondaryText}
          />
        </Pressable>

        {categoryMeta && (
          <View
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: categoryMeta.color + "22",
              borderWidth: 1,
              borderColor: categoryMeta.color + "55",
            }}
          >
            <Ionicons
              size={22}
              name={categoryMeta.icon}
              color={categoryMeta.color}
            />
          </View>
        )}

        <View>
          <Text
            style={{
              color: Colors.dark.text,
              fontSize: 22,
              fontWeight: "800",
              lineHeight: 26,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: Colors.dark.disabledText,
              fontSize: 13,
              fontWeight: "500",
              marginTop: 2,
            }}
          >
            {filteredNotes.length}{" "}
            {filteredNotes.length === 1 ? "note" : "notes"}
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: "rgba(255,255,255,0.06)",
          marginBottom: 20,
        }}
      />

      {filteredNotes.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons
            size={56}
            name="document-text-outline"
            color="rgba(255,255,255,0.1)"
          />
          <Text
            style={{
              color: Colors.dark.disabledText,
              fontSize: 16,
              fontWeight: "600",
              marginTop: 16,
            }}
          >
            No notes in this category
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              flexWrap: "wrap",
              paddingBottom: 30,
            }}
          >
            {filteredNotes.map((note: Notes) => (
              <NotesCard key={note.id} noteDetails={note} />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
