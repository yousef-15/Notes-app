import { Notes } from "./notes";

export const notes: Notes[] = [
  {
    id: 1,
    title: "React Native Ideas",
    time: "10:30 AM",
    description:
      "Learn more about Expo Router, navigation, dynamic routes, and how to pass parameters between screens.",
    icon: "code-slash",
    pinned: true,
    category: "Study",
  },
  {
    id: 2,
    title: "Project Tasks",
    time: "12:15 PM",
    description:
      "Finish the notes screen, add the note details page, and improve the card design.",
    icon: "checkmark-circle",
    pinned: true,
    category: "Work",
  },
  {
    id: 3,
    title: "Read About APIs",
    time: "2:00 PM",
    description:
      "Review how REST APIs work and practice sending GET and POST requests using fetch and Axios.",
    icon: "cloud",
    pinned: false,
    category: "Study",
  },
  {
    id: 4,
    title: "Gym",
    time: "5:30 PM",
    description:
      "Don't forget today's workout. Focus on legs and finish with 15 minutes of cardio.",
    icon: "fitness",
    pinned: false,
    category: "Personal",
  },
  {
    id: 5,
    title: "Shopping List",
    time: "7:00 PM",
    description: "Buy milk, eggs, bread, coffee, and some snacks for the week.",
    icon: "cart",
    pinned: false,
    category: "Personal",
  },
  {
    id: 6,
    title: "New App Idea",
    time: "9:20 PM",
    description:
      "Create a simple productivity app where users can organize their daily tasks and notes in one place.",
    icon: "bulb",
    pinned: true,
    category: "Personal",
  },
];
