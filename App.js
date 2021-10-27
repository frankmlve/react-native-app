import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigator/navigationTheme";
import AuthNavigator from "./app/navigator/AuthNavigator";
import AppNavigator from "./app/navigator/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
