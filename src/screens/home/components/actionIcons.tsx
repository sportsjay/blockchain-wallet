import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { colors } from "../../../common/styles";

interface ActionIconProperties extends TouchableOpacityProps {
  iconName: string;
}

export default function ActionIcon(props: ActionIconProperties) {
  return (
    <TouchableOpacity style={styles.root}>
      <Icon
        size={28}
        name={props.iconName}
        type="material"
        color={colors.primary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 6,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.primary,
  },
});
