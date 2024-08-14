import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

type LoaderProps = {
  fullScreen?: boolean;
  containerStyle?: ViewStyle;
} & ActivityIndicatorProps;

export const Loader: React.FC<LoaderProps> = (props) => {
  const { fullScreen = false, containerStyle, ...rest } = props;

  return (
    <View
      style={[
        fullScreen ? styles.fullScreenContainer : styles.container,
        containerStyle,
      ]}
    >
      <ActivityIndicator size={"large"} {...rest} />
    </View>
  );
};
