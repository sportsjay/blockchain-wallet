import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { colors, commonStyles } from "../styles";

export default function TopBar() {
  return (
    <View style={[commonStyles.center, styles.root]}>
      <TouchableOpacity onPress={() => {}} style={styles.profileWrapper}>
        <Icon size={20} name="face" type="material" color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.menuWrapper}>
        <Icon size={28} name="menu" type="material" color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.secondary,
    height: 80,
    elevation: 0,
    paddingHorizontal: "5%",
    borderBottomWidth: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  profileWrapper: {
    padding: 6,
    borderRadius: 1000,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.white,
  },
  menuWrapper: {
    padding: 6,
  },
});
