import React from "react";
import { Text } from "react-native";
import { Card } from "@components";
import { styles } from "./styles";

type OverviewProps = {
  text?: string;
};

export const Overview: React.FC<OverviewProps> = (props) => {
  const { text } = props;

  if (!text) return null;

  return (
    <Card title={"Overview"}>
      <Text style={styles.text}>{text}</Text>
    </Card>
  );
};
