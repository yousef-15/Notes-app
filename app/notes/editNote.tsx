import DropDownMenu from "@/components/DropDownMenu";
import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditNote() {
  const { id } = useLocalSearchParams();
  const { notes, editNote } = useNotes();
  const note = notes.find((n: any) => n.id === Number(id));

  const [title, setTitle] = useState(note?.title ?? "");
  const [category, setCategory] = useState(note?.category?.name ?? "Personal");
  const [description, setDescription] = useState(note?.description ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({ title: "", description: "" });

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

    editNote({
      id: note.id,
      title,
      description,
      category: { name: category, icon: iconName },
      time: note.time,
      pinned: note.pinned,
    });

    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0F1115" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 28,
              marginTop: 4,
            }}
          >
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => ({
                width: 42,
                height: 42,
                borderRadius: 13,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: pressed
                  ? "rgba(255,255,255,0.10)"
                  : "rgba(255,255,255,0.05)",
                transform: [{ scale: pressed ? 0.95 : 1 }],
              })}
            >
              <Ionicons
                size={22}
                name="chevron-back"
                color={Colors.dark.secondaryText}
              />
            </Pressable>

            <Text
              style={{
                color: Colors.dark.text,
                fontWeight: "700",
                fontSize: 17,
                letterSpacing: -0.2,
              }}
            >
              Edit Note
            </Text>

            <Pressable
              onPress={handleSave}
              style={({ pressed }) => ({
                borderRadius: 13,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: pressed
                  ? "rgba(34,197,94,0.18)"
                  : "rgba(34,197,94,0.10)",
                borderWidth: 1,
                borderColor: pressed
                  ? "rgba(34,197,94,0.5)"
                  : "rgba(34,197,94,0.3)",
                paddingVertical: 10,
                paddingHorizontal: 18,
                transform: [{ scale: pressed ? 0.96 : 1 }],
              })}
            >
              <Text
                style={{
                  color: "rgb(34,197,94)",
                  fontWeight: "700",
                  fontSize: 15,
                }}
              >
                Save
              </Text>
            </Pressable>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontSize: 11,
                fontWeight: "600",
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Title
            </Text>
            <TextInput
              value={title}
              onChangeText={(val) => {
                setTitle(val);
                if (errors.title) setErrors((e) => ({ ...e, title: "" }));
              }}
              placeholder="Give your note a title..."
              style={{
                color: Colors.dark.text,
                fontSize: 22,
                fontWeight: "700",
                borderBottomColor: errors.title
                  ? "rgba(239,68,68,0.8)"
                  : "rgba(255,255,255,0.10)",
                borderBottomWidth: 1,
                paddingBottom: 10,
                letterSpacing: -0.3,
              }}
              placeholderTextColor={Colors.dark.disabledText}
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

          <View style={{ marginBottom: 4 }}>
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontSize: 11,
                fontWeight: "600",
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Category
            </Text>
            <DropDownMenu
              category={category}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setCategory={setCategory}
            />
          </View>

          <View>
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontSize: 11,
                fontWeight: "600",
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Note
            </Text>
            <TextInput
              value={description}
              onChangeText={(val) => {
                setDescription(val);
                if (errors.description)
                  setErrors((e) => ({ ...e, description: "" }));
              }}
              placeholder="Start writing..."
              placeholderTextColor={Colors.dark.disabledText}
              style={{
                minHeight: 220,
                backgroundColor: "#181d24",
                borderRadius: 14,
                padding: 16,
                color: Colors.dark.text,
                fontSize: 16,
                lineHeight: 26,
                borderWidth: 1,
                borderColor: errors.description
                  ? "rgba(239,68,68,0.6)"
                  : "rgba(255,255,255,0.07)",
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
