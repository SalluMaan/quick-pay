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
import Text_Input from "../../../components/Text_Input/Text_Input";
import FONTS from "../../../utils/fonts";

export default CreditTab = () => {
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

        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#a4a4a4",
            width: "100%",
          }}
        >
          <Text style={styles.textStyle}>Card Holder Name</Text>
          <Picker
            selectedValue={email}
            style={{
              width: "100%",
              fontSize: 10,
              color: "#a4a4a4",
              height: height_screen * 0.04,
            }}
            onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
          >
            <Picker.Item label="Enter card holder name" value="" />
            <Picker.Item label="Paypal" value="js" />
          </Picker>
        </View>
        <Text style={styles.textStyle}>Card Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your card number"
          onChangeText={(data) => setemail(data)}
          placeholderTextColor="#a4a4a4"
          //   secureTextEntry={secureText}
        />

        <Text style={styles.textStyle}>Expiry Date</Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: height_screen * 0.02,
            width: "100%",
          }}
        >
          <Picker
            style={styles.pickerMonth}
            onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
            itemStyle={{ fontFamily: FONTS.Regular }}
          >
            <Picker.Item label="Month" value="" />
            <Picker.Item label="Paypal" value="js" />
          </Picker>
          <Picker
            style={styles.pickerYear}
            onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
          >
            <Picker.Item label="Year" value="" />
            <Picker.Item label="Paypal" value="js" />
          </Picker>
        </View>

        <Text style={styles.textStyle}>CVC</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your cvc number"
          onChangeText={(data) => setemail(data)}
          placeholderTextColor="#a4a4a4"
          //   secureTextEntry={secureText}
        />

        <View style={styles.btnView}>
          <MainButton
            text="Deposit Money"
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
    paddingTop: height_screen * 0.02,
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
  },
  textInput: {
    height: height_screen * 0.05,
    width: "100%",
    // paddingLeft: height_screen * 0.01,
    borderBottomWidth: 0.8,
    borderColor: "#a4a4a4",
  },
  textStyle: {
    width: width_screen * 0.95,
    textAlign: "left",
    fontSize: 13,
    marginTop: height_screen * 0.01,
    fontFamily: FONTS.Regular,
  },
  pickerMonth: {
    width: "30%",
    fontSize: 10,
    color: "#000",
    height: height_screen * 0.04,
    backgroundColor: "#a4a4a4",
    marginRight: 5,
    fontFamily: FONTS.Regular,
  },
  pickerYear: {
    width: "30%",
    fontSize: 10,
    color: "#000",
    height: height_screen * 0.04,
    backgroundColor: "#a4a4a4",
  },
});
