import React from "react";
import { ScrollView, Text } from "react-native";
import { MovieDetails } from "@types";
import { ImageContainer } from "@components";
import { styles } from "@screens/MovieDetails/styles";

type MovieDetailsScreenProps = {
  details?: MovieDetails;
};

export const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (
  props,
) => {
  const { details } = props;
  return (
    <ScrollView>
      <ImageContainer
        original
        resizeMode={"cover"}
        path={details?.backdrop_path}
        style={styles.image}
      />
      <Text>budget: {details?.budget}$</Text>
      <Text>homepage: {details?.homepage}</Text>
      <Text>{details?.overview}</Text>
    </ScrollView>
  );
};
