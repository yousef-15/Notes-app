import { category, Notes } from "./notes";

export const notes: Notes[] = [];

export const categories: category[] = [
  { name: "Work", icon: "briefcase", color: "#3B82F6" },
  { name: "Personal", icon: "person", color: "#EC4899" },
  { name: "Study", icon: "school", color: "#8B5CF6" },
  { name: "Ideas", icon: "bulb", color: "#F59E0B" },
  { name: "Shopping", icon: "cart", color: "#10B981" },
  { name: "Learning", icon: "checkbox", color: "#06B6D4" },
];

//new Date().getTimezoneOffset().toString()
