import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedbackProps,
} from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../styles";

interface TabProperties extends TouchableWithoutFeedbackProps {
  iconName: string;
  title: string;
}

export default function Tab(props: TabProperties) {
  return (
    <TouchableWithoutFeedback {...props} style={styles.root}>
      <View style={styles.root}>
        <Icon
          name={props.iconName ?? "home"}
          type="material"
          tvParallaxProperties={undefined}
          size={32}
        />
        <Text style={styles.title}>{props.title ?? "unknown"}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: "80%",
    backgroundColor: colors.secondary,
  },
  title: {
    color: colors.black2,
    textAlign: "center",
  },
});
