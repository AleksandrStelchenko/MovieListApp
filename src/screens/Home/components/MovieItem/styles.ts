import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 670 / 1005,
    borderRadius: 16,
    overflow: "hidden",
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(0.5, 0.5, 0.5, 0.4)",
  },
  textContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    color: "white",
    paddingBottom: 8,
    fontSize: 20,
  },
  releaseDate: {
    color: "white",
    paddingBottom: 8,
  },
});
