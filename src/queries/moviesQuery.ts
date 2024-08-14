import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMoviesByPage } from "@api";

export const useMovies = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam }) => {
      return fetchMoviesByPage(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < lastPage.total_pages) return allPages.length + 1;
      return undefined;
    },
    throwOnError: (error) => {
      // Alert.alert(
      //   "Error",
      //   `The application was unable to get the movie data due to this errorasdasd: ${error.message}`,
      // );
      return false;
    },
  });
};
