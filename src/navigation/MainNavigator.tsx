import React, { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenContainer } from "@screens/Home";
import { MainStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";
import { MovieDetailsContainer } from "@screens/MovieDetails";

export const MainNavigator = (): ReactElement => {
  const { Navigator, Screen } =
    createNativeStackNavigator<MainStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Screens.Home} component={HomeScreenContainer} />
      <Screen name={Screens.MovieDetails} component={MovieDetailsContainer} />
    </Navigator>
  );
};
