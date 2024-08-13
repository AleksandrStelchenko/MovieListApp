import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import { ImageEntity, MovieDetails } from "@types";
import { styles } from "@screens/MovieDetails/styles";
import {
  Cast,
  Overview,
  Posters,
  TitleCard,
} from "@screens/MovieDetails/components";

type MovieDetailsScreenProps = {
  details?: MovieDetails;
};

export const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (
  props,
) => {
  const { details } = props;
  const [posters, setPosters] = useState<ImageEntity[] | null>(null);

  useEffect(() => {
    const postersWithoutText = details?.images.posters?.filter(
      (item) => item.iso_639_1 == null,
    );
    const postersWithEngText = details?.images.posters?.filter(
      (item) => item.iso_639_1 == "en",
    );

    if (postersWithoutText && postersWithoutText.length > 0) {
      setPosters(postersWithoutText);
      return;
    }

    if (postersWithEngText && postersWithEngText.length > 0) {
      setPosters(postersWithEngText);
      return;
    }

    setPosters(null);
  }, [details]);

  return (
    <>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${
            posters ? posters[0].file_path : details?.poster_path
          }`,
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
      </ImageBackground>
    </>
  );
};
