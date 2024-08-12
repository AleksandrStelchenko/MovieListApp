import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ImageEntity, MovieDetails } from "@types";
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
        style={{ flex: 1 }}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${
            posters ? posters[0].file_path : details?.poster_path
          }`,
        }}
      >
        <ScrollView
          contentContainerStyle={{ gap: 16, paddingBottom: 100 }}
          style={{
            backgroundColor: "rgba(0.5, 0.5, 0.5, 0.3)",
            paddingHorizontal: 16,
            paddingTop: 60,
          }}
        >
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
                  {details?.vote_average}☆
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
            <Text
              style={{
                color: "white",
                paddingBottom: 16,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Overview
            </Text>
            <Text style={{ color: "white" }}>{details?.overview}</Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(0.5, 0.5, 0.5, 0.6)",
              width: "100%",
              paddingVertical: 16,
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingBottom: 16,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Cast
            </Text>
            <FlatList
              data={details?.credits?.cast}
              contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <ImageContainer
                    style={{
                      height: 150,
                      aspectRatio: 670 / 1005,
                      borderRadius: 16,
                    }}
                    path={item.profile_path}
                  />
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      textAlign: "center",
                      paddingTop: 8,
                    }}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                </View>
              )}
              horizontal
            />
          </View>
          {posters && (
            <View
              style={{
                backgroundColor: "rgba(0.5, 0.5, 0.5, 0.6)",
                width: "100%",
                paddingVertical: 16,
                borderRadius: 16,
              }}
            >
              <Text
                style={{
                  color: "white",
                  paddingBottom: 16,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Posters
              </Text>
              <FlatList
                data={posters}
                contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
                renderItem={({ item }) => (
                  <TouchableOpacity style={{ flex: 1 }} onPress={}>
                    <ImageContainer
                      style={{
                        height: 150,
                        aspectRatio: 670 / 1005,
                        borderRadius: 16,
                      }}
                      path={item.file_path}
                    />
                  </TouchableOpacity>
                )}
                horizontal
              />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </>
  );
};
