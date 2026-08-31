import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["dark"].tint,
        tabBarInactiveTintColor: Colors["dark"].disabledText,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#13171e",
          height: 72,
          borderTopWidth: 1,
          borderTopColor: "rgba(255,255,255,0.07)",
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
        tabBarLabelStyle: {
          marginTop: 2,
          fontSize: 11,
          fontWeight: "600",
          letterSpacing: 0.2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Notes",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={28}
              name={focused ? "reader" : "reader-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pinned"
        options={{
          title: "Pinned",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={28}
              name={focused ? "star" : "star-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              size={28}
              name={focused ? "grid" : "grid-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
