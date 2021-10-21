import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

// styles
import { commonStyles } from "../../../common/styles";
import { colors } from "../../../common/styles";

import { userState } from "../../../constants/user";

export interface ItemProperties {
  transaction: Transaction;
  user: userState;
}
export interface Transaction {
  returnValues: {
    _from: string;
    _to: string;
    _value: string;
  };
  event: string;
  transferAmount: string;
}

export function Item(props: ItemProperties) {
  const { _from, _to } = props.transaction.returnValues;
  const me = props.user;

  return (
    <View style={itemStyles.root}>
      <View style={[commonStyles.center, itemStyles.iconWrapper]}>
        <Icon
          size={32}
          name="payment"
          type="material"
          tvParallaxProperties={false}
          color={colors.primary}
        />
      </View>
      <View>
        <View style={itemStyles.header}>
          <Text
            style={{ fontSize: 14, fontWeight: "800", color: colors.primary }}
          >
            {props.transaction.event}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "800",
              color: me.publicKey === _from ? colors.red : colors.green,
            }}
          >
            {props.transaction.transferAmount}MC
          </Text>
        </View>
        <Text
          style={{ fontSize: 10, fontWeight: "800", color: colors.secondary }}
        >
          {_to === me.publicKey ? `Received\n${_from}` : `To\n${_to}`}
        </Text>
      </View>
    </View>
  );
}

const itemStyles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    backgroundColor: colors.gray,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 10,
  },
  iconWrapper: {
    height: 40,
    width: 40,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: colors.secondary,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
});
