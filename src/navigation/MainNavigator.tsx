import React, { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenContainer } from "@screens/HomeScreen";
import { MainStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";

export const MainNavigator = (): ReactElement => {
  const { Navigator, Screen } =
    createNativeStackNavigator<MainStackParamList>();

  return (
    <Navigator>
      <Screen name={Screens.Home} component={HomeScreenContainer} />
    </Navigator>
  );
};
