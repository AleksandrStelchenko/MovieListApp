import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";
import { MovieDetailsScreen } from "@screens/MovieDetails/MovieDetailsScreen";

export const MovieDetailsContainer = () => {
  const { params } =
    useRoute<RouteProp<MainStackParamList, Screens.MovieDetails>>();

  return <MovieDetailsScreen details={params.data} />;
};
