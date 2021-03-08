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
import { useDispatch } from "react-redux";
import {
  setLanguageEnglish,
  setLanguageSpanish,
} from "../../redux/language/language.actions";
import { height_screen, width_screen } from "../../utils/dimensions";

const LanguageChooser = memo(({ text, size, position, color }) => {
  const dispatch = useDispatch();

  const forEnglish = () => {
    console.log("CLICKEd");
    dispatch(setLanguageEnglish());
  };
  return (
    <View style={styles.languageView}>
      <TouchableOpacity onPress={forEnglish}>
        <Text
          style={[
            styles.textStyle,
            { fontSize: size, textAlign: position, color: color },
          ]}
        >
          ENG
        </Text>
      </TouchableOpacity>
      <Text style={[styles.textStyle, { color: color }]}> / </Text>
      <TouchableOpacity onPress={() => dispatch(setLanguageSpanish())}>
        <Text
          style={[
            styles.textStyle2,
            { fontSize: size, textAlign: position, color: "#a4a4a4" },
          ]}
        >
          SP
        </Text>
      </TouchableOpacity>
    </View>
  );
});

export default LanguageChooser;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 15,
    marginTop: height_screen * 0.02,
    fontWeight: "bold",
  },
  textStyle2: {
    textAlign: "center",
    fontSize: 15,
    marginTop: height_screen * 0.02,
    fontWeight: "bold",
    color: "#a4a4a4",
  },
  languageView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: width_screen * 0.1,
  },
});
