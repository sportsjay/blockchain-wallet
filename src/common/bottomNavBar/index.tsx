import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import { colors, sizes } from "../styles";
import Tab from "./component/tab";

export default function BottomNavbar(props: BottomTabBarProps) {
  return (
    <View style={styles.root}>
      <View style={styles.navigation}>
        {props.state.routes.map((route) => (
          <Tab iconName={route.name} title={route.name} />
        ))}
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
    height: 82,
    borderRadius: 20,
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
