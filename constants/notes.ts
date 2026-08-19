import { Ionicons } from "@expo/vector-icons";

export interface Notes {
  id: number;
  title: string;
  time: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  pinned: boolean;
  category: string;
}
