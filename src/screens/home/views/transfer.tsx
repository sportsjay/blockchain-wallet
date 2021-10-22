import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParams } from "..";

// import components
import HomeTopBar from "../../../common/topBar/home";

export type TransferScreenProperties = StackScreenProps<
  HomeStackParams,
  "transfer"
>;

export default function TransferScreen(props: TransferScreenProperties) {
  return (
    <React.Fragment>
      <HomeTopBar title={props.route.name} />
      <View style={styles.root}>
        <Text>Transfer</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
