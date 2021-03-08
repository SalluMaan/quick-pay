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
import { Picker } from "@react-native-community/picker";
import FONTS from "../../utils/fonts";

const Picker_Input = memo(
  ({
    style,
    placeholder,
    placeholderColor,
    secureText,
    setdata,
    label,
    height,
    labelOne,
  }) => {
    const [email, setemail] = useState("");

    return (
      <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#a4a4a4" }}>
        <Text style={styles.textStyle}>{label}</Text>
        <Picker
          selectedValue={email}
          style={{
            width: "100%",
            fontSize: 10,
            color: "#a4a4a4",
            height: height,
          }}
          onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
        >
          <Picker.Item label={labelOne} value="" />
          <Picker.Item label="Paypal" value="js" />
        </Picker>
      </View>
    );
  }
);

export default Picker_Input;

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
