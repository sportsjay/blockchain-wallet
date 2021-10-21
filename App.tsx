import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { MainAppState } from "./src/reducers/store";
import { store } from "./src/reducers/store";

//Import Routes
import { routes } from "./src/routes";
import SignInScreen from "./src/screens/signIn";

//Import Components
import BottomNavbar from "./src/common/bottomNavBar";
import TopBar from "./src/common/topBar";
import { colors } from "./src/common/styles";

//Navigators
const AuthNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const isSigned = useSelector<MainAppState, boolean>(
    (state) => state.user.isSigned
  );

  useEffect(() => {
    return () => {};
  }, [isSigned]);

  return (
    <NavigationContainer>
      <AuthNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthNavigator.Screen name="sign-in" component={SignInScreen} />
        <AuthNavigator.Screen name="main" component={MainApp} />
      </AuthNavigator.Navigator>
    </NavigationContainer>
  );
}

function MainApp(props: any) {
  // States
  const isSigned = useSelector<MainAppState>((state) => state.user.isSigned);

  // Functions
  useEffect(() => {
    console.log(props);
    if (!isSigned) {
    }
    return () => {};
  }, [isSigned]);

  return (
    <BottomTabNavigator.Navigator
      // Specify initial route
      initialRouteName={routes[0].name}
      screenOptions={{
        header: TopBar,
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
