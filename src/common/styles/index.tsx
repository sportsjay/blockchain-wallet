import React from "react";
import { Dimensions, StyleSheet } from "react-native";

/**
 * Color Pallete https://colorhunt.co/palette/494ca28186d5c6cbefe3e7f1
 * #494CA2 primary
 * #8186D5 secondary
 * #C6CBEF gray
 * #E3E7F1 gray2
 * #FFFFFF white
 * #000000 black
 * #181933 black2
 */

export const colors = {
  primary: "#494CA2",
  secondary: "#8186D5",
  gray: "#C6CBEF",
  gray2: "#E3E7F1",
  white: "#FFFFFF",
  black: "#000000",
  black2: "#181933",
  red: "#DC143C",
  green: "#3CB371",
};

export const sizes = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const commonStyles = StyleSheet.create({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
