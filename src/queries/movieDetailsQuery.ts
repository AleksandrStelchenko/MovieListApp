import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../api/tmdbAPI";

export const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: ["movie details", id],
    queryFn: () => fetchMovieDetails(id),
  });
};
