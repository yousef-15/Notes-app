import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["dark"].tint,
        tabBarInactiveTintColor: Colors["dark"].icon,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#171b21be",
          height: 75,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
        tabBarLabelStyle: {
          marginTop: 3,
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
