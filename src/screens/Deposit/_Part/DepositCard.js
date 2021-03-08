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
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../../utils/routes";
import FONTS from "../../../utils/fonts";

const DepositCard = memo(({ text, size, position, image, onPress }) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.mainView}>
      <Image style={styles.img} source={image ? image : { uri: NOT_FOUND }} />
      <Text style={styles.text1}>{text}</Text>
      <TouchableOpacity onPress={() => onPress(text)}>
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
    borderBottomWidth: 0.5,
    borderBottomColor: "#a4a4a4",
  },
  img: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  text1: {
    color: "#000",
    fontSize: height_screen * 0.023,
    textTransform: "uppercase",
    width: width_screen * 0.5,
    fontFamily: FONTS.Medium,
  },
  iconEdit: {
    backgroundColor: Color.LINEAR_CLR_1,
    height: height_screen * 0.035,
    width: width_screen * 0.07,
    borderRadius: 50,
    textAlign: "center",
    paddingTop: height_screen * 0.0025,
    // paddingLeft: width_screen * 0.005,
  },
});
