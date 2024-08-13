import React from "react";
import { FlatList } from "react-native";
import { CastItem } from "@screens/MovieDetails/components";
import { Card } from "@components";
import { styles } from "./styles";
import { CastEntity } from "@types";

type CastProps = {
  data?: CastEntity[] | null;
};

export const Cast: React.FC<CastProps> = (props) => {
  const { data } = props;

  if (!data || data?.length == 0) return null;

  return (
    <Card style={styles.container} title={"Cast"}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.castContainer}
        renderItem={({ item }) => <CastItem item={item} />}
        horizontal
      />
    </Card>
  );
};
