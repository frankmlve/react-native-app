import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./app/screens/main/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "./app/screens/account/AccountScreen";
import LoginScreen from "./app/screens/login/LoginScreen";
import CardList from "./app/screens/cardList/CardList";
import CardDetailsScreen from "./app/screens/cardDetails/CardDetailsScreen"

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home" options={{
    headerStyle: { backgroundColor: "orange" }
  }}>
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={CardList} ></Stack.Screen>
    <Stack.Screen name="Account" component={AccountScreen}></Stack.Screen>
    <Stack.Screen name="CardDetails" component={CardDetailsScreen} options={({ route }) => ({ title: route.params.name })}></Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
