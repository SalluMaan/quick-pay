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

const AccountCard = memo(({ text, size, position, onPress }) => {
  return (
    <View style={styles.mainView}>
      {/* <Image style={styles.img} source={{ uri: NOT_FOUND }} /> */}
      <Text style={styles.text1} onPress={onPress}>
        {text}
      </Text>
      {/* <TouchableOpacity>
        <Ionicons
          name="arrow-forward-outline"
          size={20}
          color="#fff"
          style={styles.iconEdit}
        />
      </TouchableOpacity> */}
    </View>
  );
});

export default AccountCard;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen,
    height: height_screen * 0.09,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: width_screen * 0.1,
    marginTop: height_screen * 0.01,
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
    fontSize: height_screen * 0.02,
    textTransform: "capitalize",
    width: width_screen * 0.5,
    fontFamily: FONTS.Regular,
  },
  iconEdit: {
    backgroundColor: Color.LINEAR_CLR_1,
    height: height_screen * 0.035,
    width: width_screen * 0.07,
    borderRadius: 50,
    paddingLeft: width_screen * 0.005,
  },
});
