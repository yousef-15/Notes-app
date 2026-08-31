import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "column",
    marginBottom: 16,
  },
  text: {
    color: Colors.dark.text,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    marginTop: 4,
  },
  dateContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 2,
  },
  day: {
    color: Colors.dark.disabledText,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: "#181d24",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
});
