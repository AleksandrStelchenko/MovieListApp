import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ImageEntity, Movie, MovieDetails } from "@types";
import { useMovieDetails, useMovies, useSearchMovies } from "@queries";
import { HomeScreen } from "@screens/Home/HomeScreen";
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import FastImage from "react-native-fast-image/src";
import { Screens } from "@navigation/routes";
import { MainStackParamList } from "@navigation/types";

export const HomeScreenContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [preloadInProgress, setPreloadInProgress] = useState(false);
  const [clickDisabled, setClickDisabled] = useState(false);

  const { data: moviesData, fetchNextPage: nextMoviePage } = useMovies();
  const { data: searchedData, fetchNextPage: nextSearchPage } =
    useSearchMovies(searchedText);
  const { data } = useMovieDetails(selectedId);

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const movies = useMemo(() => {
    const result: Movie[] = moviesData?.pages.reduce((acc, page) => {
      return [...acc, ...page.results];
    }, []);
    const ids = result?.map((item) => item.id);

    return result?.filter((item, index) => !ids.includes(item.id, index + 1));
  }, [moviesData]);

  const searchedMovies = useMemo(() => {
    return searchedData?.pages.reduce((acc, page) => {
      return [...acc, ...page.results];
    }, []);
  }, [searchedData]);

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

  useFocusEffect(
    useCallback(() => {
      setClickDisabled(false);
      return () => {
        setPreloadInProgress(false);
        setSelectedId(null);
      };
    }, []),
  );

  const navigateHandler = useCallback(() => {
    if (data) {
      const posters = postersHandler(data);
      const posterPath =
        posters.length > 0 ? posters[0].file_path : data.poster_path;

      FastImage.preload(
        [
          {
            uri: `https://image.tmdb.org/t/p/w500${posterPath}`,
          },
        ],
        () => {},
        () => {
          if (selectedId !== data.id) {
            return;
          }

          setPreloadInProgress(false);
          setSelectedId(null);
          setClickDisabled(true);
          navigation.navigate(Screens.MovieDetails, {
            data,
            backgroundPath: posterPath,
            posters,
          });
        },
      );
    }
  }, [data, selectedId]);

  useEffect(() => {
    navigateHandler();
  }, [data]);

  const onCardPress = (item: Movie) => {
    setPreloadInProgress(true);
    setSelectedId(item.id);
  };

  return (
    <HomeScreen
      nextMoviesPage={nextMoviePage}
      nextSearchPage={nextSearchPage}
      searchedText={searchedText}
      setSearchedText={setSearchedText}
      movies={movies}
      searchedMovies={searchedMovies}
      clickDisabled={clickDisabled}
      onCardPress={onCardPress}
      preloadInProgress={preloadInProgress}
      selectedId={selectedId}
    />
  );
};
