import React from "react";
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";
import { styles } from "./styles";

type LoaderProps = {
  fullScreen?: boolean;
} & ActivityIndicatorProps;

export const Loader: React.FC<LoaderProps> = (props) => {
  const { fullScreen = false, ...rest } = props;

  return (
    <View style={fullScreen ? styles.fullScreenContainer : styles.container}>
      <ActivityIndicator size={"large"} {...rest} />
    </View>
  );
};
