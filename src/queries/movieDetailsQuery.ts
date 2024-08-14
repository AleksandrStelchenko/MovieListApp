import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "@api";
import { Alert } from "react-native";

export const useMovieDetails = (id: number | null) => {
  return useQuery({
    queryKey: ["movie details", id],
    queryFn: () => fetchMovieDetails(id as number),
    enabled: !!id,
    throwOnError: (error) => {
      Alert.alert(
        "Error",
        `The application was unable to get the movie data due to this error: ${error.message}`,
      );
      return false;
    },
  });
};
