import React from "react";
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";
import { styles } from "./styles";

export const Loader: React.FC<ActivityIndicatorProps> = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} {...props} />
    </View>
  );
};
