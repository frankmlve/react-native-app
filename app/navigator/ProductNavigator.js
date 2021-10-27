import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CardList from "../screens/cardList/CardList";
import CardDetailsScreen from "../screens/cardDetails/CardDetailsScreen";

const Stack = createStackNavigator();

const ProductNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="CardList" component={CardList}></Stack.Screen>
        <Stack.Screen name="CardDetails" component={CardDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
);
export default ProductNavigator;
