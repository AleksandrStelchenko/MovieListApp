import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerRowContainer: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    height: 150,
    aspectRatio: 670 / 1005,
    borderRadius: 16,
  },
  text: {
    color: "white",
  },
  voteAverageText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
