import CategoryNotesButton from "@/components/CategoryNotesButton";
import { categories } from "@/constants/notesData";
import { Colors } from "@/constants/theme";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Categories() {
  const allCategories = categories;
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={{ marginBottom: 24 }}>
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
          Browse
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "800",
            color: Colors.dark.text,
            letterSpacing: -0.5,
          }}
        >
          Categories
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 30 }}>
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
