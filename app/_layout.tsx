import { NotesProvider } from "@/context/NotesContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NotesProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="notes/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="notes/addNote" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </NotesProvider>
    </ThemeProvider>
  );
}
