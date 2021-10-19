import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**
 * Import Routes
 */
import { routes } from "./src/routes";
import SignInScreen from "./src/screens/signIn";
/**
 * Import Components
 */
import BottomNavbar from "./src/common/bottomNavBar";
import { colors } from "./src/common/styles";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Navigators
 */
const AuthNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AuthNavigator.Screen name="sign-up" component={SignInScreen} />
        <AuthNavigator.Screen name="app" component={MainApp} />
      </AuthNavigator.Navigator>
    </NavigationContainer>
  );
}

function MainApp() {
  return (
    <BottomTabNavigator.Navigator
      // Specify initial route
      initialRouteName={routes[0].name}
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
        <BottomTabNavigator.Screen
          name={route.name}
          key={route.id}
          component={route.component}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
}
