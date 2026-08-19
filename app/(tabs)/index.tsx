import AddNotesButton from "@/components/AddNotesButton";
import Categories from "@/components/Categories";
import GreetingHeader from "@/components/GreetingHeader";
import NotesCard from "@/components/NotesCard";
import SearchBar from "@/components/SearchBar";
import { Notes } from "@/constants/notes";
import { notes } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { useNotes } from "@/context/NotesContext";
import { styles } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  {
    categoryName: "All",
  },
  {
    categoryName: "Work",
  },
  {
    categoryName: "Personal",
  },
  {
    categoryName: "Study",
  },
];

export default function HomeScreen() {
  const { notes } = useNotes();
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: 10, position: "relative" }}
      >
        <ScrollView>
          <View style={styles.outerContainer}>
            <GreetingHeader />
            <SearchBar />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {categories.map((category) => (
                <Categories
                  key={category.categoryName}
                  categoryName={category.categoryName}
                />
              ))}
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 20, flexWrap: "wrap" }}>
            {notes.map((note: any) => (
              <NotesCard key={note.id} noteDetails={note} />
            ))}
          </View>
        </ScrollView>
        <AddNotesButton />
      </SafeAreaView>
    </>
  );
}
