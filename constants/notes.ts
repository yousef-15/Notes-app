import { Ionicons } from "@expo/vector-icons";

export interface Notes {
  id: number;
  title: string;
  time: string;
  description: string;
  pinned: boolean;
  category: notesCategory;
}

interface notesCategory {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export interface category {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}
