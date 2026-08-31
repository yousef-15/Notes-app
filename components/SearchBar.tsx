import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import { styles } from "@/styles/styles";

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <View style={[styles.searchBarContainer, { marginBottom: 16 }]}>
      <Ionicons size={20} name="search" color={Colors.dark.disabledText} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search notes..."
        placeholderTextColor={Colors.dark.disabledText}
        numberOfLines={1}
        style={{
          flex: 1,
          width: 0,
          color: Colors.dark.text,
          fontSize: 15,
          fontWeight: "500",
        }}
      />
      {search.length > 0 && (
        <Pressable onPress={() => setSearch("")} hitSlop={8}>
          <Ionicons size={18} name="close-circle" color={Colors.dark.disabledText} />
        </Pressable>
      )}
    </View>
  );
}
