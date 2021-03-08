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

const NotifyCard = memo(({ text, size, position, image }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView1}>
        <Image source={image} />
      </View>
      <View style={styles.subView2}>
        <Text style={styles.notificationText}>
          Deposit Balance Successfully
        </Text>
        <Text style={styles.notificationDate}>27 / jan / 2021</Text>
      </View>
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
    </View>
  );
});

export default NotifyCard;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen * 0.8,
    height: height_screen * 0.1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: height_screen * 0.02,
  },
  subView1: {
    width: width_screen * 0.15,
    height: "100%",
    padding: "5%",
  },
  subView2: {
    width: width_screen * 0.65,
    height: "100%",
    justifyContent: "center",
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
    backgroundColor: "#a4a4a4",
    height: height_screen * 0.035,
    width: width_screen * 0.07,
    borderRadius: 50,
    paddingLeft: width_screen * 0.009,
    paddingTop: height_screen * 0.005,
  },
  notificationText: {
    fontFamily: FONTS.Regular,
  },
  notificationDate: {
    color: "#a4a4a4",
    fontSize: height_screen * 0.017,
    fontFamily: FONTS.Regular,
  },
});
