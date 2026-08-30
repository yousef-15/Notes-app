import { StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";

export const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  text: {
    color: Colors.dark.text,
    fontSize: 25,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  day: {
    color: Colors.dark.disabledText,
    fontSize: 12,
    fontWeight: "bold",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#171b21be",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
});
