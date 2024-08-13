import React from "react";
import { ScrollView } from "react-native";
import { ImageEntity, MovieDetails } from "@types";
import { styles } from "@screens/MovieDetails/styles";
import {
  Cast,
  Overview,
  Posters,
  TitleCard,
} from "@screens/MovieDetails/components";
import FastImage from "react-native-fast-image/src";

type MovieDetailsScreenProps = {
  details?: MovieDetails;
  posters: ImageEntity[];
  backgroundPath: string;
};

export const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (
  props,
) => {
  const { details, backgroundPath, posters } = props;

  return (
    <>
      <FastImage
        style={styles.imageBackground}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${backgroundPath}`,
        }}
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.container}
        >
          <TitleCard
            image={details?.poster_path}
            releaseDate={details?.release_date}
            status={details?.status}
            tagLine={details?.tagline}
            voteAverage={details?.vote_average}
            title={details?.title}
          />
          <Overview text={details?.overview} />
          <Cast data={details?.credits?.cast} />
          <Posters data={posters} />
        </ScrollView>
      </FastImage>
    </>
  );
};
