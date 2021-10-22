import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParams } from "..";

// import components
import HomeTopBar from "../../../common/topBar/home";

export type ServicesScreenProperties = StackScreenProps<
  HomeStackParams,
  "services"
>;

export default function ServicesScreen(props: ServicesScreenProperties) {
  return (
    <React.Fragment>
      <HomeTopBar title={props.route.name} />
      <View style={styles.root}>
        <Text>Services</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
