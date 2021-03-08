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

const TextParagraph = memo(({ text, size, position }) => {
  return (
    <>
      <Text style={[styles.textStyle, { fontSize: size, textAlign: position }]}>
        {text}
      </Text>
    </>
  );
});

export default TextParagraph;

const styles = StyleSheet.create({
  textStyle: {
    width: width_screen * 0.8,
    textAlign: "center",
    fontSize: 15,
    color: "#a4a4a4",
    fontFamily: FONTS.Regular,
  },
});
