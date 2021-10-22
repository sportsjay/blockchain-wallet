import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { colors } from "../../../common/styles";

interface ActionIconProperties extends TouchableOpacityProps {
  iconName: string;
  title?: string;
}

export default function ActionIcon(props: ActionIconProperties) {
  return (
    <TouchableOpacity {...props} style={styles.root}>
      <View>
        <Icon
          size={28}
          name={props.iconName}
          type="material"
          color={colors.primary}
        />
        <Text
          style={{
            fontWeight: "800",
            fontSize: 8,
            color: colors.primary,
            textAlign: "center",
            width: 40,
          }}
        >
          {props.title ?? `None`}
        </Text>
      </View>
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
