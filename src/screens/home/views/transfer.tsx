import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { HomeStackParams } from "..";
import ServiceAPI from "../../../api";
import { colors } from "../../../common/styles";
import TextInputPrimary from "../../../common/textInput";

// import components
import HomeTopBar from "../../../common/topBar/home";
import { userState } from "../../../constants/user";
import { MainAppState } from "../../../reducers/store";

// Temporary
function getUser(username: string) {
  switch (username) {
    case "Jason":
      return "0x8631015e55B8D25c074DeA1edBE7fEe3E707c56F";
    case "Chris":
      return "0x1918fB723b298856CF62BBC930212E6d5C399d0D";
    case "John":
      return "0x6313e852Aa713c0d26758A77c304EdA61d2B48bF";
    default:
      return "null";
  }
}

export type TransferScreenProperties = StackScreenProps<
  HomeStackParams,
  "transfer"
>;

export default function TransferScreen(props: TransferScreenProperties) {
  const api = new ServiceAPI();

  // States
  const user = useSelector<MainAppState, userState>((state) => state.user);
  const [toAddress, setToAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  async function onSubmit() {
    if (user.publicKey !== null) {
      const response = await api.createTransfer(
        user.publicKey,
        getUser(toAddress),
        amount
      );
      if (response.status == 200) Alert.alert("transfer success!");
      else Alert.alert(response.message);
    }
  }

  return (
    <React.Fragment>
      <HomeTopBar title={props.route.name} />
      <View style={styles.root}>
        <Text>Available balance:</Text>
        <Text>{user.balance} MC</Text>
        <TextInputPrimary
          placeholder="Transfer to..."
          value={toAddress}
          onChangeText={setToAddress}
          textContentType="username"
          style={{
            marginBottom: 10,
          }}
        />
        <TextInputPrimary
          placeholder="Amount..."
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={{
            marginBottom: 10,
          }}
        />
        <TouchableOpacity
          style={[buttonStyle.root, { marginBottom: 10 }]}
          onPress={onSubmit}
        >
          <Text style={buttonStyle.title}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: "5%",
  },
});

const buttonStyle = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 40,
  },
  title: {
    color: colors.gray,
    fontWeight: "700",
    textAlign: "center",
  },
});
