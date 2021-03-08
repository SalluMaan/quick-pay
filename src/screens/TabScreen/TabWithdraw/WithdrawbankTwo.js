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
import Currency from "../../../utils/currency";
import WithdrawCard from "../../Withdraw/_Part/WithdrawCard";
import { alertMessage } from "../../../utils/common/alertToastMessages";

export default WithdrawbankTwo = () => {
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [accountTitle, setaccountTitle] = useState("");
  const [iban, setiban] = useState("");
  const [swiftCode, setswiftCode] = useState("");
  const [address, setaddress] = useState("");

  const [wallet, setwallet] = useState("");
  const [Country, setCountry] = useState("");
  const [accountType, setaccountType] = useState("");
  const [bankName, setbankName] = useState("");
  const [amount, setamount] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const { login_Session } = useSelector((state) => state?.auth);

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

  const handleLocalBank = () => {
    const validate =
      wallet &&
      Country &&
      bankName &&
      amount &&
      accountNumber &&
      address &&
      city &&
      iban &&
      swiftCode &&
      accountTitle &&
      accountNumber;

    if (validate) {
      const formData = new FormData();
      formData.append("bank", "international_bank");
      formData.append("type", "null");
      formData.append("currency", wallet);
      formData.append("amount", amount);
      formData.append("bank_name", bankName);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("country", Country);
      formData.append("iban", iban);
      formData.append("swift_code", swiftCode);
      formData.append("account_title", accountTitle);
      formData.append("account_number", accountNumber);
      console.log("FormData", formData);
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
          <Text style={styles.depositText}>International Bank</Text>
        </View>
        <StatusBar style="dark" />
        <View style={styles.container2}>
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
              {Currency
                ? Currency.map((data, id) => (
                    <Picker.Item label={data.cur} key={id} value={data.cur} />
                  ))
                : null}
            </Picker>
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Amount</Text>

            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setamount(data)}
              placeholderTextColor="#a4a4a4"
              keyboardType={"number-pad"}
              value={amount}
            />
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>City</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter City Name"
              onChangeText={(data) => setcity(data)}
              placeholderTextColor="#a4a4a4"
              value={city}
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
            <Text style={styles.textStyle}>Address</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Address"
              onChangeText={(data) => setaddress(data)}
              placeholderTextColor="#a4a4a4"
              value={address}
            />
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
          {/* <View style={styles.pickerView}>
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
          </View> */}

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Account Title</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter Account Title"
              onChangeText={(data) => setaccountTitle(data)}
              placeholderTextColor="#a4a4a4"
              value={accountTitle}
            />
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>IBAN Number</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter IBAN Number"
              onChangeText={(data) => setiban(data)}
              placeholderTextColor="#a4a4a4"
              value={accountTitle}
            />
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Swift Code</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Enter Swift Code"
              onChangeText={(data) => setswiftCode(data)}
              placeholderTextColor="#a4a4a4"
              value={swiftCode}
            />
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.textStyle}>Bank Account#</Text>

            <TextInput
              style={styles.textInput}
              placeholder="Bank Account#"
              onChangeText={(data) => setaccountNumber(data)}
              placeholderTextColor="#a4a4a4"
              keyboardType={"number-pad"}
              value={email}
            />
          </View>

          <View style={styles.btnView}>
            <MainButton
              text="Withdraw"
              height={height_screen * 0.06}
              width={width_screen * 0.5}
              onPress={handleLocalBank}
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
  container2: {
    width: width_screen * 0.9,
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
  depositText: {
    fontSize: height_screen * 0.022,
    width: width_screen,
    fontFamily: FONTS.Medium,

    // fontWeight: "500",
  },
});
