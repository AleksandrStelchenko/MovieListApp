import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
  },
  listContainer: {
    paddingVertical: 40,
    gap: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 4.6,
    elevation: 5,
  },
  image: {
    height: 300,
    aspectRatio: 670 / 1005,
    borderRadius: 16,
    overflow: "hidden",
  },
});
