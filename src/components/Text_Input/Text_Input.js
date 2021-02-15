import React, { memo, useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { height_screen, width_screen } from "../../utils/dimensions";

const Text_Input = memo(
  ({ style, placeholder, placeholderColor, secureText, setdata, label }) => {
    return (
      <>
        <Text style={styles.textStyle}>{label}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(data) => setdata(data)}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureText}
        />
      </>
    );
  }
);

export default Text_Input;

const styles = StyleSheet.create({
  textInput: {
    height: height_screen * 0.05,
    width: width_screen * 0.8,
    // paddingLeft: height_screen * 0.01,
    borderBottomWidth: 0.8,
    borderColor: "#a4a4a4",
  },
  textStyle: {
    width: width_screen * 0.8,
    textAlign: "left",
    fontSize: 15,
    marginTop: height_screen * 0.01,
  },
});
