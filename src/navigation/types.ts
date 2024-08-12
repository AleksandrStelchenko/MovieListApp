import { Screens } from "@navigation/routes";

export type MainStackParamList = {
  [Screens.Home]: undefined;
  [Screens.MovieDetails]: { id: number };
};
