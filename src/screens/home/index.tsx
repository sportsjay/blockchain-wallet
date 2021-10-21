import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { colors, commonStyles } from "../../common/styles";
import { userState } from "../../constants/user";
import { MainAppState } from "../../reducers/store";
import ActionIcon from "./components/actionIcons";

export default function HomeScreen(props: StackScreenProps<any>) {
  // States
  const user = useSelector<MainAppState, userState>((state) => state.user);
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<string>("");

  // Functions
  useEffect(() => {
    // TODO: Fetch recent transactions from blockchain
    getRecentTransactions();
    return () => {};
  }, [user.isSigned]);

  // Temporary
  async function getRecentTransactions() {
    if (user.publicKey) {
      const response = await fetch(
        `http://192.168.0.104:3000/transactions/${user.publicKey}`
      );
      const parsedBody = await response.json();
      if (parsedBody.data.length > 0)
        setTransactionList(parsedBody.data.map((_data: Transaction) => _data));

      setBalance(parsedBody.balance);
    }
  }

  return (
    <View style={styles.root}>
      <View style={[styles.header, commonStyles.center]}>
        <View
          style={{
            flex: 17,
            width: "90%",
            // backgroundColor: colors.white,
            padding: 10,
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
              marginBottom: 60,
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
            style={{ fontWeight: "800", color: colors.gray, maxWidth: "60%" }}
          >
            {user.publicKey}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={[
            commonStyles.center,
            {
              flex: 4,
              width: "90%",
              borderRadius: 20,
              backgroundColor: colors.gray,
              flexDirection: "row",
              justifyContent: "space-evenly",
            },
          ]}
        >
          <ActionIcon onPress={() => {}} iconName="payment" />
          <ActionIcon onPress={() => {}} iconName="payment" />
          <ActionIcon onPress={() => {}} iconName="payment" />
          <ActionIcon onPress={() => {}} iconName="payment" />
        </View>
      </View>
      <View style={[commonStyles.center, { flex: 2, width: "100%" }]}>
        <View style={styles.contentHeader}>
          <Text
            style={{ color: colors.primary, fontSize: 20, fontWeight: "700" }}
          >
            Recent Transactions
          </Text>
        </View>
        <FlatList
          data={[...transactionList, ...transactionList, ...transactionList]}
          keyExtractor={(item, idx) => item.toString() + idx.toString()}
          ListFooterComponent={() => <View style={{ height: 100 }} />}
          renderItem={(props) => <Item transaction={props.item} user={user} />}
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
            width: "90%",
          }}
        />
      </View>
    </View>
  );
}

interface ItemProperties {
  transaction: Transaction;
  user: userState;
}
interface Transaction {
  returnValues: {
    _from: string;
    _to: string;
    _value: string;
  };
  event: string;
  transferAmount: string;
}

function Item(props: ItemProperties) {
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
  contentHeader: { width: "90%", marginVertical: 10 },
});
