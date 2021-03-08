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
import { height_screen, width_screen } from "../../utils/dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
import Color from "../../utils/color";
import FONTS from "../../utils/fonts";
import English from "../../utils/language/English.json";
import Spanish from "../../utils/language/Spanish.json";

const Text_Input = memo(
  ({
    style,
    placeholder,
    placeholderColor,
    secureText,
    setdata,
    label,
    height,
    width = width_screen * 0.8,
    value,
    disable,
  }) => {
    const [lock, setlock] = useState(false);
    return (
      <>
        <Text style={styles.textStyle}>{label}</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={[styles.textInput, { height: height, width: width }]}
            placeholder={placeholder}
            onChangeText={(data) => setdata(data)}
            placeholderTextColor={placeholderColor}
            secureTextEntry={lock ? false : secureText}
            value={value}
            // disable={disable}
            editable={disable}
          />
          {label === English.Login.text_Input_Field_Password ||
          label === Spanish.Login.text_Input_Field_Password ? (
            <TouchableOpacity onPress={() => setlock(!lock)}>
              <FontAwesome5
                name={lock ? "unlock" : "lock"}
                size={18}
                color={Color.BLACK}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </>
    );
  }
);

export default Text_Input;

const styles = StyleSheet.create({
  textInput: {
    height: height_screen * 0.05,
    width: width_screen * 0.8,
    // paddingLeft: height_screen * 0.01,
    borderBottomWidth: 0.8,
    borderColor: "#a4a4a4",
  },
  textStyle: {
    width: width_screen * 0.8,
    textAlign: "left",
    fontSize: 15,
    marginTop: height_screen * 0.01,
    fontFamily: FONTS.Regular,
  },
});
