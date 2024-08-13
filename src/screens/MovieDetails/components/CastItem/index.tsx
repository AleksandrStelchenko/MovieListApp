import React from "react";
import { Text, View } from "react-native";
import { ImageContainer } from "@components";
import { CastEntity } from "@types";
import { styles } from "./styles";

type CastItemProps = {
  item: CastEntity;
};

export const CastItem: React.FC<CastItemProps> = (props) => {
  const { item } = props;

  return (
    <View>
      <ImageContainer style={styles.image} path={item.profile_path} />
      <Text style={styles.text} numberOfLines={1}>
        {item.name}
      </Text>
    </View>
  );
};
