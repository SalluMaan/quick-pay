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
import { height_screen, width_screen } from "../../../utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Color from "../../../utils/color";
import { NOT_FOUND } from "../../../utils/URL";
import TextHead from "../../../components/TextLabel/TextHead";
import FONTS from "../../../utils/fonts";

const HomeBox = memo(({ text, amount }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <LinearGradient
      colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={styles.mainHead}
    >
      <Text style={[styles.textRoundWhite, { color: Color.LINEAR_CLR_1 }]}>
        {text}
      </Text>
      <Text style={styles.textWhite}>
        {amount} {text}
      </Text>
    </LinearGradient>
  );
});

export default HomeBox;

const styles = StyleSheet.create({
  mainHead: {
    width: width_screen * 0.22,
    height: height_screen * 0.11,
    paddingHorizontal: width_screen * 0.05,
    backgroundColor: Color.PAGE_BG_COLOR,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
  },
  textRoundWhite: {
    backgroundColor: "#fff",
    color: "#000",
    height: height_screen * 0.04,
    width: width_screen * 0.075,
    borderRadius: 50,
    textAlign: "center",
    fontSize: height_screen * 0.015,
    paddingTop: height_screen * 0.009,
    fontFamily: FONTS.Regular,
  },
  iconEdit: {
    color: "#fff",
    marginTop: height_screen * 0.005,
    marginRight: width_screen * 0.01,
  },
  textWhite: {
    color: "#fff",
    marginTop: height_screen * 0.008,
    fontSize: 11,
    fontFamily: FONTS.Regular,
    textAlign: "center",
  },
  rowCard: {
    flexDirection: "row",
  },
  img: {
    height: height_screen * 0.1,
    width: width_screen * 0.2,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
