import AddNotesButton from "@/components/AddNotesButton";
import Categories from "@/components/Categories";
import GreetingHeader from "@/components/GreetingHeader";
import NotesCard from "@/components/NotesCard";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { styles } from "@/styles/styles";
import { getNotes, saveNotes } from "@/utils/storage";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { notes, setNotes } = useNotes();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      const storedNotes = await getNotes();
      setNotes(storedNotes);
    };
    loadNotes();
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const filteredNotes = notes.filter((note: any) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );
  const notesToShow = filteredNotes.length > 0 ? filteredNotes : notes;

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 16, position: "relative" }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.outerContainer}>
            <GreetingHeader />
            <SearchBar search={search} setSearch={setSearch} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 4 }}
            >
              {categories.map((category) => (
                <Categories key={category.name} categoryName={category.name} />
              ))}
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <Text
              style={{
                color: Colors.dark.text,
                fontWeight: "700",
                fontSize: 17,
                letterSpacing: -0.2,
              }}
            >
              {search ? "Search Results" : "All Notes"}
            </Text>
            <Text
              style={{
                color: Colors.dark.disabledText,
                fontWeight: "600",
                fontSize: 13,
              }}
            >
              {notesToShow.length} notes
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 12,
              flexWrap: "wrap",
              paddingBottom: 100,
            }}
          >
            {notesToShow.map((note: any) => (
              <NotesCard key={note.id} noteDetails={note} />
            ))}
          </View>
        </ScrollView>
        <AddNotesButton />
      </SafeAreaView>
    </>
  );
}
