import React, { useMemo, useState } from "react";
import { Movie } from "@types";
import { useMovies, useSearchMovies } from "@queries";
import { HomeScreen } from "@screens/Home/HomeScreen";

export const HomeScreenContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const { data: moviesData, fetchNextPage: nextMoviePage } = useMovies();
  const { data: searchedData, fetchNextPage: nextSearchPage } =
    useSearchMovies(searchedText);

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

  return (
    <HomeScreen
      nextMoviesPage={nextMoviePage}
      nextSearchPage={nextSearchPage}
      searchedText={searchedText}
      setSearchedText={setSearchedText}
      movies={movies}
      searchedMovies={searchedMovies}
    />
  );
};
