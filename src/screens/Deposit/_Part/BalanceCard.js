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
import FONTS from "../../../utils/fonts";

const BalanceCard = memo(({ text, size, position }) => {
  return (
    <View style={styles.mainView}>
      {/* <Image style={styles.img} source={{ uri: NOT_FOUND }} />
      <Text style={styles.text1}>{text}</Text>
      <TouchableOpacity>
        <Ionicons
          name="arrow-forward-outline"
          size={20}
          color="#fff"
          style={styles.iconEdit}
        />
      </TouchableOpacity> */}
      <View style={styles.rowCard}>
        <Text style={{ fontFamily: FONTS.Medium }}>My Balance</Text>
        <Image
          style={styles.img}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.amountView}>
        <Text style={styles.amountViewSign}>$</Text>
        <Text style={styles.amountViewText}>2,123</Text>
      </View>
    </View>
  );
});

export default BalanceCard;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen * 0.8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: height_screen * 0.03,
    borderRadius: 15,
    padding: width_screen * 0.06,
    borderWidth: 0.2,
    borderColor: "#a4a4a4",
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
    fontSize: height_screen * 0.022,
    position: "absolute",
    fontFamily: FONTS.SemiBold,
  },
  amountViewText: {
    fontSize: height_screen * 0.07,
    // fontWeight: "bold",
    fontFamily: FONTS.SemiBold,
  },
  amountView: {
    marginTop: height_screen * 0.02,
  },
});
