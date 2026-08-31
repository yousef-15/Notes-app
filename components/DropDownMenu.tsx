import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

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
  const selectedColor = categories.find(
    (c) => c.name.toLowerCase() === category.toLowerCase(),
  )?.color;

  return (
    <View style={{ position: "relative", marginBottom: 20 }}>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        style={({ pressed }) => ({
          height: 52,
          borderRadius: 14,
          backgroundColor: pressed ? "#1e242d" : "#181d24",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: isOpen
            ? "rgba(124,92,252,0.4)"
            : "rgba(255,255,255,0.07)",
        })}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {selectedColor && (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: selectedColor,
              }}
            />
          )}
          <Text style={{ color: Colors.dark.text, fontWeight: "600", fontSize: 15 }}>
            {category}
          </Text>
        </View>
        <Ionicons
          size={18}
          name={isOpen ? "chevron-up" : "chevron-down"}
          color={Colors.dark.disabledText}
        />
      </Pressable>

      {isOpen && (
        <View
          style={{
            position: "absolute",
            top: 56,
            left: 0,
            right: 0,
            backgroundColor: "#181d24",
            borderRadius: 14,
            zIndex: 100,
            elevation: 10,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          {categories.map((item, index) => (
            <Pressable
              key={item.name}
              onPress={() => {
                setCategory(item.name);
                setIsOpen(false);
              }}
              style={({ pressed }) => ({
                paddingVertical: 14,
                paddingHorizontal: 16,
                backgroundColor: pressed
                  ? "#232a35"
                  : item.name === category
                    ? "#1e242d"
                    : "transparent",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                borderTopWidth: index === 0 ? 0 : 1,
                borderTopColor: "rgba(255,255,255,0.05)",
              })}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: item.color,
                }}
              />
              <Text
                style={{
                  color:
                    item.name === category
                      ? Colors.dark.text
                      : Colors.dark.secondaryText,
                  fontWeight: item.name === category ? "700" : "500",
                  fontSize: 15,
                  flex: 1,
                }}
              >
                {item.name}
              </Text>
              {item.name === category && (
                <Ionicons
                  name="checkmark"
                  size={16}
                  color={Colors.dark.tint}
                />
              )}
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
