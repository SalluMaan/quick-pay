import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../../components/buttons/MainButton";
import HeaderSimple from "../../../components/header/HeaderSimple";
import Picker_Input from "../../../components/Picker_Input/Picker_Input";
import Color from "../../../utils/color";
import { height_screen, width_screen } from "../../../utils/dimensions";
import { Picker } from "@react-native-community/picker";
import FONTS from "../../../utils/fonts";

export default WithdrawCrypto = () => {
  const [email, setemail] = useState("");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>Wallet Balance</Text>
          <Picker
            selectedValue={email}
            style={{
              width: "100%",
              fontSize: 10,
              color: "#a4a4a4",
              height: height_screen * 0.05,
            }}
            onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
          >
            <Picker.Item label="Select Wallet(USD)" value="" />
            <Picker.Item label="Paypal" value="js" />
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>CryptoCurrency</Text>
          <Picker
            selectedValue={email}
            style={{
              width: "100%",
              fontSize: 10,
              color: "#a4a4a4",
              height: height_screen * 0.05,
            }}
            onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
          >
            <Picker.Item label="Select crypto(BTC)" value="" />
            <Picker.Item label="Paypal" value="js" />
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>Withdrawal Amount</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Enter amount to withdraw"
            onChangeText={(data) => setemail(data)}
            placeholderTextColor="#a4a4a4"
          />
        </View>

        <View style={styles.btnView}>
          <MainButton
            text="Withdraw"
            height={height_screen * 0.06}
            width={width_screen * 0.5}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width_screen * 0.95,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  img: {
    height: height_screen * 0.18,
    width: width_screen * 0.35,
    resizeMode: "contain",
    marginTop: height_screen * 0.05,
    alignSelf: "center",
  },
  addressText: {
    marginTop: height_screen * 0.02,
  },
  addressText1: {
    marginTop: height_screen * 0.02,
    fontSize: height_screen * 0.012,
    color: "#a4a4a4",
  },
  addressText2: {
    marginTop: height_screen * 0.02,
    padding: "3%",
    backgroundColor: Color.PAGE_BG_COLOR,
  },
  btnView: {
    marginTop: height_screen * 0.03,
    width: "100%",
    alignItems: "center",
  },
  textStyle: {
    width: width_screen * 0.9,
    textAlign: "left",
    fontSize: 13,
    marginTop: height_screen * 0.01,
    fontFamily: FONTS.Regular,
  },
  pickerView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#a4a4a4",
    width: "100%",
  },
  textInput: {
    width: "100%",
    backgroundColor: "#fff",
    height: height_screen * 0.05,
    paddingLeft: width_screen * 0.01,
  },
});
