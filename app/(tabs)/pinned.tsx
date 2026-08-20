import PinnedNotesCard from "@/components/PinnedNotesCard";
import SearchBar from "@/components/SearchBar";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
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
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: isSearching ? 0 : 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: Colors.dark.text, fontSize: 20, fontWeight: "700" }}
        >
          Pinned
        </Text>
        <Pressable
          onPress={() => {
            setIsSearching((prev) => !prev);
            setSearch("");
          }}
          style={({ pressed }) => ({
            borderRadius: 5,
            marginRight: 10,
            backgroundColor: pressed ? "#1d232b" : "#171b21be",
            paddingHorizontal: 6,
            paddingVertical: 4,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          })}
        >
          <Ionicons
            size={25}
            name={isSearching ? "close" : "search"}
            color={Colors.dark.text}
          />
        </Pressable>
      </View>
      <View>
        {isSearching && <SearchBar search={search} setSearch={setSearch} />}
      </View>
      <ScrollView>
        <View style={{ gap: 10 }}>
          {notesToShow.map((note: any) => (
            <PinnedNotesCard key={note.id} noteDetails={note} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
