import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "@api";

export const useMovieDetails = (id: number | null) => {
  return useQuery({
    queryKey: ["movie details", id],
    queryFn: () => fetchMovieDetails(id as number),
    enabled: !!id,
    throwOnError: (error) => {
      console.log(error);
      console.log("er");
      console.log("qr");
      return false;
    },
  });
};
