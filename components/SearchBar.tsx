import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
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
    <View style={[styles.searchBarContainer, { marginVertical: 20 }]}>
      <Ionicons size={22} name="search" color={Colors.dark.placeholderText} />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search notes..."
        placeholderTextColor={Colors.dark.placeholderText}
        numberOfLines={1}
        style={{
          flex: 1,
          width: 0,
          color: Colors.dark.text,
          fontSize: 18,
        }}
      />
    </View>
  );
}
