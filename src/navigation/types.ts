import { Screens } from "@navigation/routes";
import { ImageEntity, MovieDetails } from "@types";

export type MainStackParamList = {
  [Screens.Home]: undefined;
  [Screens.MovieDetails]: {
    data: MovieDetails;
    backgroundPath: string;
    posters: ImageEntity[];
  };
};
