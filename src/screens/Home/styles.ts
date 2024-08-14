import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  input: {
    color: "white",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "rgba(0.5, 0.5, 0.5, 0.6)",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingVertical: 40,
    gap: 16,
  },
  card: {
    flex: 1,
  },
  columnWrapper: {
    gap: 16,
  },
  loader: {
    backgroundColor: "transparent",
    position: undefined,
    height: undefined,
    width: undefined,
  },
});
