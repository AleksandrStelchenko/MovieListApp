import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMoviesByTitle } from "@api";

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
  });
};
