import { Notes } from "@/constants/notes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Notes_Key = "notes";

export const saveNotes = async (notes: Notes[]) => {
  try {
    await AsyncStorage.setItem(Notes_Key, JSON.stringify(notes));
  } catch (err) {
    console.log("Error saving notes", err);
  }
};

export const getNotes = async (): Promise<Notes[]> => {
  try {
    const data = await AsyncStorage.getItem(Notes_Key);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log("Error getting notes", err);
    return [];
  }
};
