import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card, ImageContainer, Loader } from "@components";
import moment from "moment";
import { Movie } from "@types";
import { styles } from "./styles";

type MovieItemProps = {
  disabled: boolean;
  onPress: (item: Movie) => void;
  movie: Movie;
  preloadInProgress: boolean;
  selectedId: number | null;
};

export const MovieItem: React.FC<MovieItemProps> = (props) => {
  const { disabled, onPress, movie, preloadInProgress, selectedId } = props;
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => onPress(movie)}
        key={movie.id}
        style={styles.container}
      >
        <Card style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.releaseDate}>
              {moment(movie.release_date, "YYYY-MM-DD").format("DD MMM, YYYY")}
            </Text>
          </View>
          <ImageContainer
            loader
            style={styles.image}
            path={movie.poster_path}
          />
        </Card>
        {preloadInProgress && movie.id === selectedId && <Loader />}
      </TouchableOpacity>
    </>
  );
};
