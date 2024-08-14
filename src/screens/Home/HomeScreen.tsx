import React from "react";
import { FlatList, ImageBackground, TextInput } from "react-native";
import { Movie } from "@types";
import { styles } from "@screens/Home/styles";
import { MovieItem } from "@screens/Home/components/MovieItem";
import { Loader } from "@components";

type HomeScreenProps = {
  movies?: Movie[];
  searchedMovies?: Movie[];
  nextMoviesPage: () => void;
  nextSearchPage: () => void;
  searchedText: string;
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
  clickDisabled: boolean;
  onCardPress: (item: Movie) => void;
  preloadInProgress: boolean;
  selectedId: number | null;
  isSearchLoading: boolean;
  isMoviesLoading: boolean;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {
    movies,
    searchedMovies,
    nextMoviesPage,
    nextSearchPage,
    searchedText,
    setSearchedText,
    clickDisabled,
    onCardPress,
    preloadInProgress,
    selectedId,
    isMoviesLoading,
    isSearchLoading,
  } = props;

  return (
    <ImageBackground
      source={require("../../resources/images/background.jpeg")}
      style={styles.container}
    >
      {(searchedText && isSearchLoading) ||
        (movies?.length == 0 && !searchedText && isMoviesLoading && (
          <Loader fullScreen />
        ))}

      <TextInput
        style={styles.input}
        placeholder={"Search"}
        placeholderTextColor={"white"}
        onChangeText={setSearchedText}
      />
      <FlatList
        data={searchedText ? searchedMovies : movies}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
        onEndReachedThreshold={0}
        onEndReached={() => {
          searchedText ? nextSearchPage() : nextMoviesPage();
        }}
        ListFooterComponent={() => (
          <Loader animating={isMoviesLoading} containerStyle={styles.loader} />
        )}
        renderItem={({ item }) => (
          <MovieItem
            selectedId={selectedId}
            preloadInProgress={preloadInProgress}
            disabled={clickDisabled}
            onPress={onCardPress}
            movie={item}
          />
        )}
      />
    </ImageBackground>
  );
};
