import React, { useState } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { colors } from "../../common/styles";

export default function TextInputPrimary(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function onFocus() {
    setIsFocused(true);
  }

  function onEndFocus() {
    setIsFocused(false);
  }

  return (
    <TextInput
      onFocus={onFocus}
      onEndEditing={onEndFocus}
      {...props}
      style={[
        textInputStyles.root,
        isFocused ? textInputStyles.active : {},
        props.style,
      ]}
    />
  );
}

const textInputStyles = StyleSheet.create({
  root: {
    width: "100%",
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray,
    padding: 0,
  },
  active: {
    borderBottomColor: colors.primary,
  },
});
