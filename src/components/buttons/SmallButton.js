import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSelector } from "react-redux";
import Color from "../../utils/color";
import { width_screen, height_screen } from "../../utils/dimensions/index";
import FONTS from "../../utils/fonts";

interface ButtonFilterProps {
  onPress: () => void;
  text: string;
  btnStyle?: ViewStyle;
}

const SmallButton = memo(
  ({
    onPress,
    text,
    btnStyle = styles.submitBtn,
    height,
    width,
    paddingTop,
    fontSize,
  }: ButtonFilterProps) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 10,
            width: width,
            height: height,
          }}
        >
          <Text
            style={[btnStyle, { paddingTop: paddingTop, fontSize: fontSize }]}
          >
            {text}
          </Text>
          {/* <View
            style={{
              position: "absolute",
              left: 0,
              right: width_screen * 0.02,
              top: 0,
              bottom: 0,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator color="#fff" animating={false} size="small" />
          </View> */}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
);

export default SmallButton;

const styles = StyleSheet.create({
  submitBtn: {
    height: height_screen * 0.05,
    width: width_screen * 0.55,
    backgroundColor: "transparent",
    borderRadius: 10,
    marginTop: height_screen * 0.01,
    textAlign: "center",
    paddingTop: height_screen * 0.008,
    color: "#fff",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: FONTS.Regular,
  },
});
