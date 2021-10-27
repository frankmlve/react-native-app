import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/account/AccountScreen";
import ProductNavigator from "./ProductNavigator";
import colors from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.skiBlue,
        tabBarActiveTintColor: colors.white
    }} >
        <Tab.Screen name="Products" component={ProductNavigator} options={{
            tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="store" size={size} color={color} />
        }}></Tab.Screen>
        <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
        }}></Tab.Screen>
    </Tab.Navigator>
);
export default AppNavigator;