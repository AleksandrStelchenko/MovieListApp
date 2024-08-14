import React from "react";
import { Text } from "react-native";
import { Card } from "@components";
import { styles } from "./styles";

export const EmptyComponent = () => {
  return (
    <Card>
      <Text style={styles.text}>Nothing found</Text>
    </Card>
  );
};
