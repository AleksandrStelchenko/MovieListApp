import React, { useState } from "react";
import { Text, View } from "react-native";
import { ImageContainer } from "@components";
import { CastEntity } from "@types";
import { styles } from "./styles";

type CastItemProps = {
  item: CastEntity;
};

export const CastItem: React.FC<CastItemProps> = (props) => {
  const { item } = props;
  const [textWidth, setTextWidth] = useState<number>();

  return (
    <View>
      <ImageContainer
        onLayout={(e) => {
          setTextWidth(e.nativeEvent.layout.width);
        }}
        loader
        style={styles.image}
        path={item.profile_path}
      />
      <Text style={[styles.text, { width: textWidth }]} numberOfLines={1}>
        {item.name}
      </Text>
    </View>
  );
};
