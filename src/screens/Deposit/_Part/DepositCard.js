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

const DepositCard = memo(({ text, size, position }) => {
  return (
    <View style={styles.mainView}>
      <Image style={styles.img} source={{ uri: NOT_FOUND }} />
      <Text style={styles.text1}>{text}</Text>
      <TouchableOpacity>
        <Ionicons
          name="arrow-forward-outline"
          size={20}
          color="#fff"
          style={styles.iconEdit}
        />
      </TouchableOpacity>
    </View>
  );
});

export default DepositCard;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen,
    height: height_screen * 0.08,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 0.4,
    borderBottomColor: "#a4a4a4",
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#a4a4a4",
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
});
