import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountTypes,
  getBanksByCountryName,
  getCountries,
} from "../../../redux/user/user.actions";

export default TabWithdraw = () => {
  const [email, setemail] = useState("");
  const [wallet, setwallet] = useState("");
  const [Country, setCountry] = useState("");
  const [accountType, setaccountType] = useState("");
  const [bankName, setbankName] = useState("");

  const dispatch = useDispatch();
  const { account_types, countries, banks } = useSelector(
    (state) => state.user
  );

  console.log("Response Redux ", banks);

  useEffect(() => {
    dispatch(getAccountTypes());
    dispatch(getCountries());
  }, [dispatch]);

  const selectCountry = (country) => {
    console.log({ country });
    setCountry(country);
    dispatch(getBanksByCountryName(country));
  };
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
          <Text style={styles.textStyle}>Wallet</Text>
          <Picker
            selectedValue={wallet}
            style={{
              width: "100%",
              fontSize: 10,
              color: "#a4a4a4",
              height: height_screen * 0.05,
            }}
            onValueChange={(itemValue, itemIndex) => setwallet(itemValue)}
          >
            <Picker.Item label="Select Wallet" value="" />
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="ARS" value="ARS" />
            <Picker.Item label="SOL" value="SOL" />
            <Picker.Item label="CLP" value="CLP" />
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>Amount</Text>

          <TextInput
            style={styles.textInput}
            placeholder="0.00"
            onChangeText={(data) => setemail(data)}
            placeholderTextColor="#a4a4a4"
            keyboardType={"number-pad"}
          />
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>Country</Text>
          <Picker
            selectedValue={Country}
            style={{
              width: "100%",
              fontSize: 10,
              color: "#a4a4a4",
              height: height_screen * 0.05,
            }}
            onValueChange={(itemValue, itemIndex) => selectCountry(itemValue)}
          >
            <Picker.Item label="Select Country" value="" />
            {countries
              ? Object.entries(countries).map(([k, v], id) => (
                  <Picker.Item key={id} label={k} value={v} />
                ))
              : null}
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>Account Type</Text>
          <Picker
            selectedValue={accountType}
            style={{
              width: "100%",
              fontSize: 10,
              color: "#a4a4a4",
              height: height_screen * 0.05,
            }}
            onValueChange={(itemValue, itemIndex) => setaccountType(itemValue)}
          >
            <Picker.Item label="Select Account Type" value="" />
            {/* {Array.isArray(account_types) && account_types.length > 0
              ? account_types.map((data, id) => (
                  <Picker.Item key={id} label={data} value={data} />
                ))
              : null} */}

            {account_types
              ? Object.entries(account_types).map(([k, v], id) => (
                  <Picker.Item key={id} label={k} value={v} />
                ))
              : null}
          </Picker>
        </View>
        {Country ? (
          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Bank Name</Text>
            <Picker
              selectedValue={bankName}
              style={{
                width: "100%",
                fontSize: 10,
                color: "#a4a4a4",
                height: height_screen * 0.05,
              }}
              onValueChange={(itemValue, itemIndex) => setbankName(itemValue)}
            >
              <Picker.Item label="Select Bank Name" value="" />

              {banks
                ? Object.entries(banks).map(([k, v], id) => (
                    <Picker.Item key={id} label={k} value={v} />
                  ))
                : null}
            </Picker>
          </View>
        ) : null}
        <View style={styles.pickerView}>
          <Text style={styles.textStyle}>Bank Account#</Text>
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
            <Picker.Item label="Enter Bank Account" value="" />
            <Picker.Item label="Paypal" value="js" />
          </Picker>
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
