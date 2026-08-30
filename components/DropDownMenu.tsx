import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "@/constants/notesData";

export default function DropDownMenu({
  category,
  setIsOpen,
  isOpen,
  setCategory,
}: {
  category: string;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  setCategory: (value: string) => void;
}) {
  return (
    <>
      <View style={{ position: "relative" }}>
        <Pressable
          onPress={() => setIsOpen(!isOpen)}
          style={{
            height: 50,
            borderRadius: 10,
            backgroundColor: "#171b21",
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: Colors.dark.text }}>{category}</Text>
          <Ionicons
            size={20}
            name={isOpen ? "chevron-up" : "chevron-down"}
            color={Colors.dark.text}
          />
        </Pressable>
        {isOpen && (
          <View
            style={{
              position: "absolute",
              top: 55,
              left: 0,
              right: 0,
              backgroundColor: "#171b21",
              borderRadius: 10,
              zIndex: 100,
              elevation: 5,
            }}
          >
            {categories.map((item) => (
              <Pressable
                key={item.name}
                onPress={() => {
                  setCategory(item.name);
                  setIsOpen(false);
                }}
                style={{
                  padding: 15,
                }}
              >
                <Text style={{ color: Colors.dark.text }}>{item.name}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </>
  );
}
