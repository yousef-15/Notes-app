import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotesDetails() {
  const { id } = useLocalSearchParams();
  const { notes, togglePinned, deleteNote } = useNotes();
  const note = notes.find((n: any) => n.id === Number(id));

  if (!note) return null;

  const categoryColor = categories.find(
    (categ) => categ.name === note.category.name,
  );

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
          marginBottom: 24,
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

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable
            style={({ pressed }) => ({
              width: 42,
              height: 42,
              borderRadius: 13,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: note?.pinned
                ? pressed
                  ? "rgba(251,191,36,0.20)"
                  : "rgba(251,191,36,0.12)"
                : pressed
                  ? "rgba(255,255,255,0.10)"
                  : "rgba(255,255,255,0.05)",
              transform: [{ scale: pressed ? 0.95 : 1 }],
            })}
            onPress={() => togglePinned(Number(id))}
          >
            <Ionicons
              size={20}
              name={note?.pinned ? "pin" : "pin-outline"}
              color={note?.pinned ? "#FBBF24" : Colors.dark.secondaryText}
            />
          </Pressable>

          <Pressable
            style={({ pressed }) => ({
              width: 42,
              height: 42,
              borderRadius: 13,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: pressed
                ? "rgba(124,92,252,0.20)"
                : "rgba(124,92,252,0.10)",
              borderWidth: 1,
              borderColor: pressed
                ? "rgba(124,92,252,0.5)"
                : "rgba(124,92,252,0.25)",
              transform: [{ scale: pressed ? 0.95 : 1 }],
            })}
            onPress={() => router.push(`/notes/editNote?id=${id}`)}
          >
            <Ionicons
              size={20}
              name="create-outline"
              color={Colors.dark.tint}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: categoryColor?.color + "22",
            borderWidth: 1,
            borderColor: categoryColor?.color + "33",
            marginBottom: 18,
          }}
        >
          <Ionicons
            size={34}
            name={note?.category.icon}
            color={categoryColor?.color}
          />
        </View>

        <Text
          style={{
            color: Colors.dark.text,
            fontWeight: "800",
            fontSize: 28,
            lineHeight: 34,
            marginBottom: 12,
            letterSpacing: -0.5,
          }}
        >
          {note?.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 22,
            flexWrap: "wrap",
          }}
        >
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 20,
              backgroundColor: categoryColor?.color + "22",
              borderWidth: 1,
              borderColor: categoryColor?.color + "44",
            }}
          >
            <Text
              style={{
                color: categoryColor?.color,
                fontWeight: "700",
                fontSize: 12,
                letterSpacing: 0.2,
              }}
            >
              {note?.category.name}
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <Ionicons
              name="time-outline"
              size={14}
              color={Colors.dark.disabledText}
            />
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontWeight: "500",
                fontSize: 12,
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
            marginBottom: 22,
          }}
        />

        <Text
          style={{
            color: Colors.dark.secondaryText,
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 27,
          }}
        >
          {note?.description}
        </Text>
      </ScrollView>

      <Pressable
        onPress={() => {
          deleteNote(Number(id));
          router.back();
        }}
        style={({ pressed }) => ({
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: pressed
            ? "rgba(239,68,68,0.14)"
            : "rgba(239,68,68,0.07)",
          borderWidth: 1,
          borderColor: pressed
            ? "rgba(239,68,68,0.35)"
            : "rgba(239,68,68,0.18)",
          borderRadius: 16,
          paddingVertical: 15,
          marginBottom: 6,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        })}
      >
        <Ionicons size={20} name="trash-outline" color="#EF4444" />
        <Text
          style={{
            color: "#EF4444",
            fontWeight: "700",
            fontSize: 15,
          }}
        >
          Delete Note
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
