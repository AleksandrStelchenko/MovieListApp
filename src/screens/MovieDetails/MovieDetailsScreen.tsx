import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { MovieDetails } from "@types";
import { ImageContainer } from "@components";
import { styles } from "@screens/MovieDetails/styles";
import moment from "moment";

type MovieDetailsScreenProps = {
  details?: MovieDetails;
};

export const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (
  props,
) => {
  const { details } = props;
  const posterWithoutText = details?.images.posters?.find(
    (item) => item.iso_639_1 == null,
  );
  const posterWithText = details?.images.posters?.find(
    (item) => item.iso_639_1 == "en",
  );
  console.log(details?.id);
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${
          posterWithoutText?.file_path
            ? posterWithoutText.file_path
            : posterWithText?.file_path
        }`,
      }}
    >
      <ScrollView
        contentContainerStyle={{ gap: 16 }}
        style={{
          backgroundColor: "rgba(0.5, 0.5, 0.5, 0.3)",
          paddingHorizontal: 16,
          paddingVertical: 60,
        }}
      >
        {/*<ImageContainer*/}
        {/*  original*/}
        {/*  resizeMode={"cover"}*/}
        {/*  path={details?.backdrop_path}*/}
        {/*  style={styles.image}*/}
        {/*/>*/}
        <View
          style={{
            backgroundColor: "rgba(0.5, 0.5, 0.5, 0.6)",
            width: "100%",
            padding: 16,
            borderRadius: 16,
          }}
        >
          <View style={{ flexDirection: "row", gap: 16 }}>
            <ImageContainer
              original
              resizeMode={"cover"}
              path={details?.poster_path}
              style={styles.image}
            />
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <View>
                <Text style={{ color: "white" }}>
                  {details?.title.toUpperCase()}
                </Text>
                <Text style={{ color: "white" }}>{details?.tagline}</Text>
              </View>
              <Text
                style={{ color: "white", fontSize: 30, textAlign: "center" }}
              >
                {details?.vote_average}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "white" }}>{details?.status}</Text>

                <Text style={{ color: "white" }}>
                  {moment(details?.release_date, "YYYY-MM-DD").format(
                    "DD MMM, YYYY",
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0.5, 0.5, 0.5, 0.6)",
            width: "100%",
            padding: 16,
            borderRadius: 16,
          }}
        >
          <Text style={{ color: "white" }}>{details?.overview}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
