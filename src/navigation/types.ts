import { Screens } from "@navigation/routes";
import { MovieDetails } from "@types";

export type MainStackParamList = {
  [Screens.Home]: undefined;
  [Screens.MovieDetails]: { data: MovieDetails };
};
