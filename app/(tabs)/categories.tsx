import CategoryNotesButton from "@/components/CategoryNotesButton";
import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Categories() {
  const allCategories = categories;
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Text
          style={{ fontSize: 24, fontWeight: "600", color: Colors.dark.text }}
        >
          Categories
        </Text>
      </View>
      <ScrollView>
        <View>
          {allCategories.map((categ) => (
            <CategoryNotesButton
              key={categ.name}
              name={categ.name}
              icon={categ.icon}
              color={categ.color}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
