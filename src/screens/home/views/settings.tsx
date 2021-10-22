import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParams } from "..";

// import components
import HomeTopBar from "../../../common/topBar/home";

export type SettingsScreenProperties = StackScreenProps<
  HomeStackParams,
  "settings"
>;

export default function SettingsScreen(props: SettingsScreenProperties) {
  return (
    <React.Fragment>
      <HomeTopBar title={props.route.name} />
      <View style={styles.root}>
        <Text>Settings</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
