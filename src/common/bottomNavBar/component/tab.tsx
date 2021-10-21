import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../styles";

interface TabProperties extends TouchableOpacityProps {
  isActive: boolean;
  iconName: string;
  title: string;
}

export default function Tab(props: TabProperties) {
  return (
    <TouchableOpacity {...props} style={styles.root}>
      <View style={styles.root}>
        <Icon
          name={props.iconName ?? "home"}
          type="material"
          tvParallaxProperties={undefined}
          color={props.isActive ? colors.secondary : colors.gray}
          size={24}
        />
        <Text
          style={[
            styles.title,
            { color: props.isActive ? colors.secondary : colors.gray },
          ]}
        >
          {props.title ?? "unknown"}
        </Text>
        <View
          style={[
            styles.active,
            {
              backgroundColor: props.isActive
                ? colors.secondary
                : "transparent",
            },
          ]}
        />
      </View>
    </TouchableOpacity>
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
    // backgroundColor: colors,
    borderRadius: 4,
  },
  active: {
    height: 6,
    width: 6,
    borderRadius: 3,
  },
  title: {
    color: colors.black2,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 2,
    fontSize: 10, // TODO: unify font size
  },
});
