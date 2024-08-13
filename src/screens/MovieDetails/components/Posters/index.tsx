import React from "react";
import { FlatList } from "react-native";
import { Card } from "@components";
import { styles } from "./styles";
import { ImageEntity } from "@types";
import { PostersItem } from "@screens/MovieDetails/components/PostersItem";

type PostersProps = {
  data?: ImageEntity[] | null;
};

export const Posters: React.FC<PostersProps> = (props) => {
  const { data } = props;

  if (!data || data?.length == 0) return null;

  return (
    <Card style={styles.container} title={"Posters"}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <PostersItem item={item} />}
        horizontal
      />
    </Card>
  );
};
