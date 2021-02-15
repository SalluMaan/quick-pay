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

const VerticalLine = () => {
  return <View style={styles.lineStyle}></View>;
};

export default VerticalLine;

const styles = StyleSheet.create({
  lineStyle: {
    height: height_screen * 0.008,
    backgroundColor: "#a4a4a4",
    width: width_screen * 0.6,
    alignSelf: "center",
    borderRadius: 10,
  },
});
