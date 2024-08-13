import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Screens } from "@navigation/routes";
import { ImageContainer } from "@components";
import moment from "moment/moment";
import { ImageEntity, Movie, MovieDetails } from "@types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "@navigation/types";
import { styles } from "@screens/Home/styles";
import { useMovieDetails } from "@queries";
import FastImage from "react-native-fast-image";

type HomeScreenProps = {
  movies?: Movie[];
  searchedMovies?: Movie[];
  nextMoviesPage: () => void;
  nextSearchPage: () => void;
  searchedText: string;
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {
    movies,
    searchedMovies,
    nextMoviesPage,
    nextSearchPage,
    searchedText,
    setSearchedText,
  } = props;
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data, isLoading } = useMovieDetails(selectedId);

  const postersHandler = (details: MovieDetails) => {
    const posters: ImageEntity[] = [];
    const postersWithoutText = details?.images.posters?.filter(
      (item) => item.iso_639_1 == null,
    );
    const postersWithEngText = details?.images.posters?.filter(
      (item) => item.iso_639_1 == "en",
    );

    if (postersWithoutText && postersWithoutText.length > 0) {
      posters.push(...postersWithoutText);
      return posters;
    }

    if (postersWithEngText && postersWithEngText.length > 0) {
      posters.push(...postersWithEngText);
      return posters;
    }

    return posters;
  };

  useEffect(() => {
    if (data) {
      setSelectedId(null);
      const posters = postersHandler(data);
      const posterPath =
        posters.length > 0 ? posters[0].file_path : data.poster_path;
      FastImage.preload([
        {
          uri: `https://image.tmdb.org/t/p/${posterPath}`,
          headers: { Authorization: "someAuthToken" },
        },
      ]);
      navigation.navigate(Screens.MovieDetails, { data });
    }
  }, [data]);

  useEffect(() => {
    console.log("loading", isLoading);
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setSearchedText} />
      <Button
        title={"title"}
        onPress={() => {
          nextSearchPage();
        }}
      />
      <FlatList
        data={searchedText ? searchedMovies : movies}
        contentContainerStyle={styles.listContainer}
        onEndReached={() => {
          searchedText ? nextSearchPage() : nextMoviesPage();
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={
              () => setSelectedId(item.id)
              // navigation.navigate(Screens.MovieDetails, { id: item.id })
            }
            key={item.id}
            style={styles.card}
          >
            {isLoading && item.id === selectedId && <ActivityIndicator />}
            <ImageContainer style={styles.image} path={item.poster_path} />
            <View>
              <Text>{item.title}</Text>
              <Text>
                {moment(item.release_date, "YYYY-MM-DD").format("DD MMM, YYYY")}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
