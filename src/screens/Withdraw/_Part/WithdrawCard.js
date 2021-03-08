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
import { NOT_FOUND } from "../../../utils/URL";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../../utils/color";
import { LinearGradient } from "expo-linear-gradient";
import FONTS from "../../../utils/fonts";

const WithdrawCard = memo(({ text, size, position }) => {
  return (
    <LinearGradient
      colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={styles.mainView}
    >
      <View style={styles.rowCard}>
        <Text style={{ color: "#fff", fontFamily: FONTS.Medium }}>
          My Balance
        </Text>
      </View>
      <View style={styles.amountView}>
        <Text style={styles.amountViewSign}>$</Text>
        <Text style={styles.amountViewText}>2,123</Text>
      </View>
    </LinearGradient>
  );
});

export default WithdrawCard;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    padding: width_screen * 0.06,
  },
  img: {
    height: 30,
    width: 30,
    position: "relative",
    left: width_screen * 0.2,
  },
  text1: {
    color: "#000",
    fontSize: height_screen * 0.023,
    textTransform: "uppercase",
    width: width_screen * 0.5,
  },
  iconEdit: {
    backgroundColor: Color.LINEAR_CLR_1,
    height: height_screen * 0.035,
    width: width_screen * 0.07,
    borderRadius: 50,
    paddingLeft: width_screen * 0.005,
  },
  rowCard: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  amountViewSign: {
    // fontWeight: "bold",
    fontSize: height_screen * 0.02,
    position: "absolute",
    color: "#fff",
    fontFamily: FONTS.Bold,
  },
  amountViewText: {
    fontSize: height_screen * 0.07,
    // fontWeight: "bold",
    color: "#fff",
    fontFamily: FONTS.SemiBold,
  },
  amountView: {
    marginTop: height_screen * 0.02,
  },
});
