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
import { FontAwesome5 } from "@expo/vector-icons";
import Color from "../../../utils/color";
import MainButton from "../../../components/buttons/MainButton";
import SmallButton from "../../../components/buttons/SmallButton";
import FONTS from "../../../utils/fonts";

const Kyc_Card = memo(
  ({ text, size, position, btnTitle, iconName, onPress, label, labelTrue }) => {
    return (
      <>
        <View style={styles.mainView}>
          <FontAwesome5
            name={iconName}
            size={25}
            color={Color.LINEAR_CLR_1}
            style={styles.iconEdit}
          />
          <View>
            <Text style={styles.text1} onPress={onPress}>
              {text}
            </Text>
            {labelTrue ? (
              <Text
                style={{
                  color: "#a4a4a4",
                  fontSize: 10,
                  textTransform: "uppercase",
                  fontFamily: FONTS.Regular,
                }}
              >
                {label}
              </Text>
            ) : null}
          </View>
          <TouchableOpacity>
            <SmallButton
              text={btnTitle}
              height={height_screen * 0.045}
              width={width_screen * 0.17}
              fontSize={12}
              onPress={onPress}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
);

export default Kyc_Card;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen * 0.85,
    height: height_screen * 0.07,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
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
    fontSize: height_screen * 0.018,
    textTransform: "capitalize",
    width: width_screen * 0.5,
    fontFamily: FONTS.Medium,
  },
  iconEdit: {
    height: height_screen * 0.04,
    width: width_screen * 0.1,
    paddingLeft: width_screen * 0.005,
  },
});
