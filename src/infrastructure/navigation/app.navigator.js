import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SettingsNavigator } from "./settings.navigator";
import { ListsScreen } from "../../features/lists/screens/lists.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  ShoppingLists: "md-cart",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "#00796b",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="ShoppingLists" component={ListsScreen} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);
