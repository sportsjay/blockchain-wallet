import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import { colors, sizes } from "../styles";
import Tab from "./component/tab";

/**
 * routes
 */
import { tabRoutes } from "../../routes";

export default function BottomNavbar(props: BottomTabBarProps) {
  return (
    <View style={styles.root}>
      <View style={styles.navigation}>
        {tabRoutes.map((route, idx) => {
          const isActive = props.state.index === idx;
          function onPress() {
            const event = props.navigation.emit({
              type: "tabPress",
              target: props.state.routes[idx].key,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              props.navigation.navigate(route.name, { merge: true });
            }
          }

          return (
            <Tab
              onPress={onPress}
              key={props.state.routes[idx].key}
              iconName={tabRoutes[idx].iconName!}
              title={route.name}
              isActive={isActive}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 0,
    width: sizes.width,
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  navigation: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
