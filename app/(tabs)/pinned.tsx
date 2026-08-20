import PinnedNotesCard from "@/components/PinnedNotesCard";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pinned() {
  const { notes } = useNotes();
  const pinnedNotes = notes.filter((note: any) => note?.pinned === true);
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text
          style={{ color: Colors.dark.text, fontSize: 20, fontWeight: "700" }}
        >
          Pinned
        </Text>
      </View>
      <ScrollView>
        <View style={{ gap: 10 }}>
          {pinnedNotes.map((note: any) => (
            <PinnedNotesCard key={note.id} noteDetails={note} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
