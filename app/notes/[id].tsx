import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotesDetails() {
  const { id } = useLocalSearchParams();
  const { notes, togglePinned, deleteNote } = useNotes();
  const note = notes.find((n: any) => n.id === Number(id));
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
        >
          <Ionicons
            size={24}
            name="chevron-back"
            color={Colors.dark.secondaryText}
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Pressable
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: note?.pinned
                ? "rgba(251,191,36,0.12)"
                : "rgba(255,255,255,0.05)",
            }}
            onPress={() => togglePinned(Number(id))}
          >
            <Ionicons
              size={21}
              name={note?.pinned ? "pin" : "pin-outline"}
              color={note?.pinned ? "#FBBF24" : Colors.dark.secondaryText}
            />
          </Pressable>

          <Pressable
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <Ionicons
              size={21}
              name="attach"
              color={Colors.dark.secondaryText}
            />
          </Pressable>

          <Pressable
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <Ionicons
              size={21}
              name="create-outline"
              color={Colors.dark.secondaryText}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(34,197,94,0.10)",
            borderWidth: 1,
            borderColor: "rgba(34,197,94,0.35)",
            marginBottom: 18,
          }}
        >
          <Ionicons size={38} name={note?.icon} color="#22C55E" />
        </View>

        <Text
          style={{
            color: Colors.dark.text,
            fontWeight: "900",
            fontSize: 30,
            lineHeight: 36,
            marginBottom: 12,
          }}
        >
          {note?.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 25,
          }}
        >
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 7,
              borderRadius: 10,
              backgroundColor: "rgba(34,197,94,0.10)",
            }}
          >
            <Text
              style={{
                color: "#22C55E",
                fontWeight: "700",
                fontSize: 13,
              }}
            >
              {note?.category}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons
              name="time-outline"
              size={15}
              color={Colors.dark.disabledText}
            />

            <Text
              style={{
                color: Colors.dark.disabledText,
                fontWeight: "600",
                fontSize: 13,
              }}
            >
              {note?.time}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.07)",
            marginBottom: 25,
          }}
        />

        <Text
          style={{
            color: Colors.dark.text,
            fontWeight: "500",
            fontSize: 17,
            lineHeight: 28,
          }}
        >
          {note?.description}
        </Text>
      </ScrollView>

      <Pressable
        onPress={() => {
          deleteNote(id);
          router.back();
        }}
        style={{
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(239,68,68,0.08)",
          borderWidth: 1,
          borderColor: "rgba(239,68,68,0.18)",
          borderRadius: 14,
          paddingVertical: 14,
          marginBottom: 5,
        }}
      >
        <Ionicons size={21} name="trash-outline" color="#EF4444" />

        <Text
          style={{
            color: "#EF4444",
            fontWeight: "800",
            fontSize: 16,
          }}
        >
          Delete Note
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
