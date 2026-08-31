import PinnedNotesCard from "@/components/PinnedNotesCard";
import SearchBar from "@/components/SearchBar";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pinned() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { notes } = useNotes();
  const pinnedNotes = notes.filter((note: any) => note?.pinned);
  const filteredNotes = pinnedNotes.filter((note: any) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );
  const notesToShow = filteredNotes.length > 0 ? filteredNotes : pinnedNotes;

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: isSearching ? 12 : 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.dark.disabledText,
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 2,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            Collection
          </Text>
          <Text
            style={{ color: Colors.dark.text, fontSize: 24, fontWeight: "800", letterSpacing: -0.5 }}
          >
            Pinned Notes
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setIsSearching((prev) => !prev);
            setSearch("");
          }}
          style={({ pressed }) => ({
            width: 40,
            height: 40,
            borderRadius: 12,
            backgroundColor: pressed
              ? "#232a35"
              : isSearching
                ? "rgba(124,92,252,0.15)"
                : "#181d24",
            borderWidth: 1,
            borderColor: isSearching
              ? "rgba(124,92,252,0.3)"
              : "rgba(255,255,255,0.07)",
            justifyContent: "center",
            alignItems: "center",
            transform: [{ scale: pressed ? 0.95 : 1 }],
          })}
        >
          <Ionicons
            size={20}
            name={isSearching ? "close" : "search"}
            color={isSearching ? Colors.dark.tint : Colors.dark.secondaryText}
          />
        </Pressable>
      </View>

      {isSearching && <SearchBar search={search} setSearch={setSearch} />}

      <ScrollView showsVerticalScrollIndicator={false}>
        {pinnedNotes.length === 0 ? (
          <View
            style={{
              alignItems: "center",
              marginTop: 80,
              gap: 12,
            }}
          >
            <Ionicons
              name="pin-outline"
              size={52}
              color={Colors.dark.disabledText}
            />
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              No pinned notes yet
            </Text>
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontSize: 13,
                textAlign: "center",
                opacity: 0.7,
              }}
            >
              Open a note and tap the pin icon to save it here
            </Text>
          </View>
        ) : (
          <View style={{ gap: 10, paddingBottom: 30 }}>
            {notesToShow.map((note: any) => (
              <PinnedNotesCard key={note.id} noteDetails={note} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
