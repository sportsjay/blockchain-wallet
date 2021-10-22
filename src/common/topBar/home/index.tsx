import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ViewProps,
} from "react-native";
import { Icon } from "react-native-elements";

// Import styles
import { colors, commonStyles } from "../../styles";

export interface HomeTopBarProperties extends ViewProps {
  title: string;
}

export default function HomeTopBar(props: HomeTopBarProperties) {
  const navigation = useNavigation();
  return (
    <View {...props} style={[commonStyles.center, styles.root, props.style]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backIcon}
      >
        <Icon
          size={32}
          name="chevron-left"
          type="material"
          color={colors.primary}
          tvParallaxProperties={undefined}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 60,
    paddingBottom: 10,
    elevation: 0,
    paddingHorizontal: "5%",
    borderBottomWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backIcon: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "capitalize",
    marginLeft: 24,
  },
});
