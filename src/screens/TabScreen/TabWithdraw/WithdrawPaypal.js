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
import WithdrawCard from "../../Withdraw/_Part/WithdrawCard";
import Currency from "../../../utils/currency";
import { useDispatch, useSelector } from "react-redux";
import { withDrawMethods } from "../../../redux/withdraw/withdraw.action";

export default WithdrawPaypal = () => {
  const [email, setemail] = useState("");
  const { login_Session } = useSelector((state) => state?.auth);
  const [currency, setcurrency] = useState("");
  const [amount, setamount] = useState("");
  const dispatch = useDispatch();

  const handlePaypal = () => {
    const validate = currency && amount && email;

    if (validate) {
      const formData = new FormData();
      formData.append("bank", "paypal");
      formData.append("type", "null");
      formData.append("currency", currency);
      formData.append("amount", amount);
      formData.append("email", email);
      console.log("FormData", formData);
      withDrawMethods(formData);
    } else {
      alertMessage("Kindly Select All the Fields");
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderSimple heading="Withdraw" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <WithdrawCard amount={login_Session?.customer_wallet?.usd.toFixed(2)} />
        <View
          style={{
            width: width_screen,
            marginTop: "5%",
            backgroundColor: "#fff",
            paddingTop: height_screen * 0.01,
            paddingHorizontal: width_screen * 0.05,
          }}
        >
          <Text style={styles.depositText}>Paypal</Text>
        </View>
        <StatusBar style="dark" />

        <View style={styles.container2}>
          <StatusBar style="dark" />
          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Wallet Balance</Text>
            <Picker
              selectedValue={currency}
              style={{
                width: "100%",
                fontSize: 10,
                color: "#a4a4a4",
                height: height_screen * 0.05,
              }}
              onValueChange={(itemValue, itemIndex) => setcurrency(itemValue)}
            >
              <Picker.Item label="Select Wallet(USD)" value="" />
              {Currency
                ? Currency.map((data, id) => (
                    <Picker.Item label={data.cur} key={id} value={data.cur} />
                  ))
                : null}
            </Picker>
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Withdrawal Amount</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter amount to withdraw"
              onChangeText={(data) => setamount(data)}
              placeholderTextColor="#a4a4a4"
              keyboardType={"number-pad"}
              value={amount}
            />
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Paypal Email</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter your Paypal Email"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
              value={email}
            />
          </View>

          <View style={styles.btnView}>
            <MainButton
              text="Withdraw"
              height={height_screen * 0.06}
              width={width_screen * 0.5}
              onPress={handlePaypal}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width_screen,
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
  container2: {
    width: width_screen * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  depositText: {
    fontSize: height_screen * 0.022,
    width: width_screen,
    fontFamily: FONTS.Medium,

    // fontWeight: "500",
  },
});
