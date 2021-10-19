import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TransactionHistoryScreen() {
  return (
    <View style={styles.root}>
      <Text>Transaction History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
