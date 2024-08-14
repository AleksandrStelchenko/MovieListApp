import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMoviesByTitle } from "@api";
import { Alert } from "react-native";

export const useSearchMovies = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["searched movies", query],
    queryFn: ({ pageParam }) => {
      return fetchMoviesByTitle(query, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < lastPage.total_pages) return allPages.length + 1;
      return undefined;
    },
    throwOnError: (error) => {
      Alert.alert(
        "Error",
        `The application was unable to get the movie data due to this error: ${error.message}`,
      );
      return false;
    },
  });
};
