import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { colors, commonStyles } from "../../../common/styles";
import { userState } from "../../../constants/user";
import { MainAppState } from "../../../reducers/store";
import ActionIcon from "../components/actionIcons";
import { Item, Transaction } from "../components/transaction";
import React, { useEffect, useState } from "react";
import { HomeStackParams } from "..";
import ServiceAPI from "../../../api";

export type HomeScreenProperties = StackScreenProps<
  HomeStackParams,
  "home-index"
>;

// Temporary
function getUser(username: string | null) {
  switch (username) {
    case "0x8631015e55B8D25c074DeA1edBE7fEe3E707c56F":
      return "Jason";
    case "0x1918fB723b298856CF62BBC930212E6d5C399d0D":
      return "Chris";
    case "0x6313e852Aa713c0d26758A77c304EdA61d2B48bF":
      return "John";
    default:
      return "null";
  }
}

export default function HomeScreen(props: HomeScreenProperties) {
  const api = new ServiceAPI();

  // States
  const user = useSelector<MainAppState, userState>((state) => state.user);
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<string>("");

  // Functions
  useEffect(() => {
    // TODO: Fetch recent transactions from blockchain
    initializeData();
    return () => {};
  }, [user.isSigned]);

  // Temporary
  async function initializeData() {
    if (user.publicKey) {
      const txResponse = await api.getRecentTransactions(user.publicKey);
      if (txResponse.data.length > 0) setTransactionList([...txResponse.data]);
      setBalance(txResponse.balance);
    }
  }

  return (
    <View style={styles.root}>
      <View style={[styles.header, commonStyles.center]}>
        <View
          style={{
            flex: 17,
            width: "90%",
            paddingVertical: 10,
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontWeight: "900",
              fontSize: 48,
              color: colors.white,
            }}
          >
            {balance} MC
          </Text>
          <Text
            style={{
              marginBottom: 32,
              color: colors.gray2,
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Current Balance
          </Text>
          <Text
            style={{ fontSize: 32, fontWeight: "900", color: colors.gray2 }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              color: colors.gray,
              maxWidth: "60%",
            }}
          >
            {getUser(user.publicKey)}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
        <View style={[commonStyles.center, styles.actions]}>
          <ActionIcon
            onPress={() => {
              props.navigation.push("transfer");
            }}
            iconName="payment"
            title="Transfer"
          />
          <ActionIcon
            onPress={() => {
              props.navigation.push("top-up");
            }}
            iconName="arrow-circle-up"
            title="Top Up"
          />
          <ActionIcon
            onPress={() => {
              props.navigation.push("services");
            }}
            iconName="toll"
            title="Services"
          />
          <ActionIcon
            onPress={() => {
              props.navigation.push("settings");
            }}
            iconName="settings"
            title="Settings"
          />
        </View>
      </View>
      <View style={[commonStyles.center, { flex: 2, width: "100%" }]}>
        <FlatList
          data={[...transactionList]}
          keyExtractor={(item, idx) => item.toString() + idx.toString()}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
          renderItem={(props) => <Item transaction={props.item} user={user} />}
          ListHeaderComponent={() => (
            <Text
              style={[
                styles.contentHeader,
                { color: colors.primary, fontSize: 20, fontWeight: "700" },
              ]}
            >
              Recent Transactions
            </Text>
          )}
          contentContainerStyle={{
            width: "100%",
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
              }}
            />
          )}
          style={{
            width: "100%",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.secondary,
    paddingVertical: 10,
  },
  contentHeader: { width: "90%", marginVertical: 10, alignSelf: "center" },
  actions: {
    flex: 4,
    width: "90%",
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.gray,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderStyle: "solid",
    borderWidth: 6,
    borderColor: colors.primary,
  },
});
