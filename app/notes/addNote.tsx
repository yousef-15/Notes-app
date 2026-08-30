import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import DropDownMenu from "@/components/DropDownMenu";
import { Notes } from "@/constants/notes";
import Pinned from "../(tabs)/pinned";
import { categories } from "@/constants/notesData";
import { useNotes } from "@/context/NotesContext";

export default function addNote() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { addNote } = useNotes();
  const iconName = categories.find(
    (n) => n.category.toLowerCase() === category.toLowerCase(),
  )?.icon;
  const newNote = {
    id: Date.now(),
    title,
    description,
    category: category,
    time: new Date().toLocaleTimeString(),
    icon: iconName,
    pinned: false,
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#0F1115" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
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
            transform: [{ scale: pressed ? 0.98 : 1 }],
          })}
        >
          <Ionicons
            size={24}
            name="chevron-back"
            color={Colors.dark.secondaryText}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            addNote(newNote);
            router.back();
            // console.log(iconName);
          }}
          style={({ pressed }) => ({
            borderRadius: 18,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(34,197,94,0.10)",
            borderWidth: 1,
            borderColor: "rgba(34,197,94,0.35)",
            paddingVertical: 10,
            paddingHorizontal: 10,
            transform: [{ scale: pressed ? 0.96 : 1 }],
          })}
        >
          <Text style={{ color: "rgb(34,197,94)" }}>Save</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Note Title"
          style={{
            color: Colors.dark.text,
            fontSize: 25,
            borderBottomColor: "rgba(255,255,255,0.07)",
            borderBottomWidth: 1,
          }}
          placeholderTextColor={Colors.dark.placeholderText}
        />
      </View>
      <DropDownMenu
        category={category}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCategory={setCategory}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Write your note..."
        placeholderTextColor="#777"
        style={{
          height: 250,
          backgroundColor: "#171b21",
          borderRadius: 12,
          padding: 15,
          color: Colors.dark.text,
          fontSize: 16,
        }}
        multiline
        textAlignVertical="top"
      />
    </SafeAreaView>
  );
}
