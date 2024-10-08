import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0.5, 0.5, 0.5, 0.5)",
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 16,
    justifyContent: "center",
  },
  fullScreenContainer: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
  },
});
