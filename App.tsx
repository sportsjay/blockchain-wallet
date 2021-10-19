import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**
 * Import Routes
 */
import { routes, RouteProperties } from "./src/routes";

/**
 * Import Components
 */
import BottomNavbar from "./src/common/bottomNavBar";
import { colors } from "./src/common/styles";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.primary,
            height: 60,
          },
        }}
        tabBar={BottomNavbar}
      >
        {routes.map((route) => (
          <Tab.Screen
            name={route.name}
            key={route.id}
            component={route.component}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
