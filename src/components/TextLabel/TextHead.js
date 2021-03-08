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
import FONTS from "../../utils/fonts";

const TextHead = memo(({ text, size, position, color, width, onPress }) => {
  return (
    <>
      <Text
        style={[
          styles.textStyle,
          { fontSize: size, textAlign: position, color: color, width: width },
        ]}
        onPress={onPress}
      >
        {text}
      </Text>
    </>
  );
});

export default TextHead;

const styles = StyleSheet.create({
  textStyle: {
    width: width_screen * 0.8,
    textAlign: "center",
    fontSize: 15,
    marginTop: height_screen * 0.02,
    // fontWeight: "bold",
    fontFamily: FONTS.Bold,
  },
});
