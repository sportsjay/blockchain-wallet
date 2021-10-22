import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";

// import screens
import HomeScreen from "./views/home";
import ServicesScreen from "./views/services";
import SettingsScreen from "./views/settings";
import TopUpScreen from "./views/topUp";
import TransferScreen from "./views/transfer";

export type HomeStackParams = {
  "home-index": undefined;
  transfer: undefined;
  "top-up": undefined;
  services: undefined;
  settings: undefined;
};

const HomeNavigator = createStackNavigator<HomeStackParams>();

export default function HomeNavigation() {
  return (
    <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
      <HomeNavigator.Screen name="home-index" component={HomeScreen} />
      <HomeNavigator.Screen name="transfer" component={TransferScreen} />
      <HomeNavigator.Screen name="top-up" component={TopUpScreen} />
      <HomeNavigator.Screen name="services" component={ServicesScreen} />
      <HomeNavigator.Screen name="settings" component={SettingsScreen} />
    </HomeNavigator.Navigator>
  );
}
