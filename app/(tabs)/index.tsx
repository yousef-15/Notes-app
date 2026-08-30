import AddNotesButton from "@/components/AddNotesButton";
import Categories from "@/components/Categories";
import GreetingHeader from "@/components/GreetingHeader";
import NotesCard from "@/components/NotesCard";
import SearchBar from "@/components/SearchBar";
import { categories, notes } from "@/constants/notesData";
import { useNotes } from "@/context/NotesContext";
import { styles } from "@/styles/styles";
import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { notes } = useNotes();
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note: any) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );
  const notesToShow = filteredNotes.length > 0 ? filteredNotes : notes;
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 10, position: "relative" }}
      >
        <ScrollView>
          <View style={styles.outerContainer}>
            <GreetingHeader />
            <SearchBar search={search} setSearch={setSearch} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => (
                <Categories key={category.name} categoryName={category.name} />
              ))}
            </ScrollView>
          </View>
          <View style={{ flexDirection: "row", gap: 20, flexWrap: "wrap" }}>
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
