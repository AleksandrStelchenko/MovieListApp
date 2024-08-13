import React from "react";
import { View } from "react-native";
import { ImageContainer } from "@components";
import { ImageEntity } from "@types";
import { styles } from "./styles";

type PostersItemProps = {
  item: ImageEntity;
};

export const PostersItem: React.FC<PostersItemProps> = (props) => {
  const { item } = props;
  return (
    <View>
      <ImageContainer style={styles.image} path={item.file_path} />
    </View>
  );
};
