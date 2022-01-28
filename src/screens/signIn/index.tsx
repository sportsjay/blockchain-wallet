import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions/user";
import ServiceAPI from "../../api";

// Import Styles
import { colors, commonStyles } from "../../common/styles";

// Import Component
import TextInputPrimary from "../../common/textInput";
import { EVM_NETWORK } from "../../networkConfig";
import { MainAppDispatch } from "../../reducers/store";

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

export default function SignInScreen(props: StackScreenProps<any>) {
  const api = new ServiceAPI();

  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Functions
  const dispatch = useDispatch<MainAppDispatch>();

  async function onSubmit() {
    const loginResponseBody = await api.login(getUser(username));
    if (loginResponseBody.data.isSigned) {
      dispatch(
        signIn({
          isSigned: loginResponseBody.data.isSigned,
          privateKey: "",
          publicKey: loginResponseBody.data.publicKey,
          balance: loginResponseBody.data.balance,
        })
      );
      // TODO: enumerate navigations
      props.navigation.navigate("main");
    } else {
      Alert.alert("Failed to login!");
    }
  }

  // TODO: change password logic
  function onPressForgotPassword() {}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
    >
      <View style={[styles.header, commonStyles.center]}>
        <Text style={styles.title}>MyWallet</Text>
      </View>
      <View style={[styles.form]}>
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Sign In Here!</Text>
          <Text style={styles.formDescription}>
            <Text style={{ fontWeight: "900" }}>Remember:</Text> Do not share
            your private key to anyone
          </Text>
        </View>
        <View style={[styles.formContent, commonStyles.center]}>
          <TextInputPrimary
            placeholder="Username/ID"
            value={username}
            onChangeText={setUsername}
            textContentType="username"
            style={{
              marginBottom: 10,
            }}
          />
          <TextInputPrimary
            placeholder="Password/Private Key"
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry={true}
            style={{
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            style={[buttonStyle.root, { marginBottom: 10 }]}
            onPress={onSubmit}
          >
            <Text style={buttonStyle.title}>Submit</Text>
          </TouchableOpacity>
          <Button title="Forgot Password" onPress={onPressForgotPassword} />
        </View>
        <View style={[styles.formFooter]}>
          <Text
            style={[
              styles.formDescription,
              { textAlign: "center", fontWeight: "700" },
            ]}
          >
            <Text style={{ color: colors.primary }}>All Rights Reserved</Text>{" "}
            J-FYP
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
  },
  header: {
    height: "30%",
    width: "100%",
  },
  // Typography
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: colors.gray,
  },
  form: {
    height: "65%",
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 36,
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  formHeader: {
    width: "100%",
    height: 100,
    paddingTop: 20,
  },
  // Typography
  formTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: colors.primary,
    marginBottom: 6,
  },
  // Typography
  formDescription: {
    fontWeight: "500",
    color: colors.secondary,
  },
  formContent: {
    flex: 1,
  },
  formFooter: {
    height: 60,
    // backgroundColor: colors.gray,
  },
});

const buttonStyle = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: colors.gray,
    padding: 10,
    borderRadius: 40,
  },
  title: {
    color: colors.primary,
    fontWeight: "700",
    textAlign: "center",
  },
});
