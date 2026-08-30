import DropDownMenu from "@/components/DropDownMenu";
import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function addNote() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({ title: "", description: "" });
  const { addNote } = useNotes();
  const iconName = categories.find(
    (n) => n.name.toLowerCase() === category.toLowerCase(),
  )?.icon;

  const handleSave = () => {
    const newErrors = { title: "", description: "" };
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (newErrors.title || newErrors.description) {
      setErrors(newErrors);
      return;
    }
    addNote({
      id: Date.now(),
      title,
      description,
      category: { name: category, icon: iconName },
      time:
        new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }) +
        " · " +
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      pinned: false,
    });
    router.back();
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
          onPress={handleSave}
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
          onChangeText={(val) => {
            setTitle(val);
            if (errors.title) setErrors((e) => ({ ...e, title: "" }));
          }}
          placeholder="Note Title"
          style={{
            color: Colors.dark.text,
            fontSize: 25,
            borderBottomColor: errors.title
              ? "rgba(239,68,68,0.8)"
              : "rgba(255,255,255,0.07)",
            borderBottomWidth: 1,
          }}
          placeholderTextColor={Colors.dark.placeholderText}
        />
        {errors.title ? (
          <Text
            style={{
              color: "#EF4444",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 6,
            }}
          >
            {errors.title}
          </Text>
        ) : null}
      </View>
      <DropDownMenu
        category={category}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCategory={setCategory}
      />
      <TextInput
        value={description}
        onChangeText={(val) => {
          setDescription(val);
          if (errors.description) setErrors((e) => ({ ...e, description: "" }));
        }}
        placeholder="Write your note..."
        placeholderTextColor="#777"
        style={{
          height: 250,
          backgroundColor: "#171b21",
          borderRadius: 12,
          padding: 15,
          color: Colors.dark.text,
          fontSize: 16,
          borderWidth: 1,
          borderColor: errors.description
            ? "rgba(239,68,68,0.6)"
            : "transparent",
        }}
        multiline
        textAlignVertical="top"
      />
      {errors.description ? (
        <Text
          style={{
            color: "#EF4444",
            fontSize: 12,
            fontWeight: "500",
            marginTop: 6,
          }}
        >
          {errors.description}
        </Text>
      ) : null}
    </SafeAreaView>
  );
}
