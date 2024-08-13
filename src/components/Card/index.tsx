import React, { ReactNode } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type CardProps = {
  children: ReactNode;
  title?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
};

export const Card: React.FC<CardProps> = (props) => {
  const { children, style, title, titleStyle } = props;
  return (
    <View style={[styles.container, style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {children}
    </View>
  );
};
