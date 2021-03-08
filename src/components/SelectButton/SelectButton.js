import React, { memo, useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { height_screen, width_screen } from "../../utils/dimensions/index";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../utils/color";
import FONTS from "../../utils/fonts";
import { FontAwesome5 } from "@expo/vector-icons";

const SelectButton = memo(({ text, size, position, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={onPress}>
      <Text style={{ color: Color.LINEAR_CLR_1, fontFamily: FONTS.Medium }}>
        <FontAwesome5 name={icon} size={18} color={Color.LINEAR_CLR_1} />{" "}
        {"\t\t"}
        {text}
      </Text>
    </TouchableOpacity>
  );
});

export default SelectButton;

const styles = StyleSheet.create({
  mainView: {
    height: height_screen * 0.06,
    // alignItems: "center",
    width: width_screen * 0.95,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Color.LINEAR_CLR_2,
    marginTop: height_screen * 0.01,
    paddingLeft: width_screen * 0.05,
  },
});
