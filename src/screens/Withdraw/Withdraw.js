import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import SelectButton from "../../components/SelectButton/SelectButton";
import TabDepositMethod from "../../navigation/TabNavigator/TabDepositMethod";
import TabWithdraw from "../../navigation/TabNavigator/TabWithdraw";
import { getAccountTypes } from "../../redux/user/user.actions";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import FONTS from "../../utils/fonts";
import BalanceCard from "../Deposit/_Part/BalanceCard";
import WithdrawCard from "./_Part/WithdrawCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import ROUTES from "../../utils/routes";

export default Withdraw = () => {
  const [email, setemail] = useState("");
  const { navigate } = useNavigation();
  const { login_Session } = useSelector((state) => state?.auth);

  const handlePress = () => {
    console.log("Clicked");
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
            height: height_screen * 0.65,
            width: width_screen,
            marginTop: "5%",
            backgroundColor: "#fff",
            paddingTop: height_screen * 0.01,
            paddingHorizontal: width_screen * 0.05,
          }}
        >
          <Text style={styles.depositText}>Payment Method</Text>
          <SelectButton
            text="Local Bank"
            icon="university"
            onPress={() => navigate(ROUTES.WithdrawLocalBank)}
          />

          <SelectButton
            text="International Bank"
            icon="university"
            onPress={() => navigate(ROUTES.WithdrawInternationalBank)}
          />

          <SelectButton
            text="Crypto Currency"
            icon="bitcoin"
            onPress={() => navigate(ROUTES.WithdrawCrypto)}
          />

          <SelectButton
            text="PayPal"
            icon="paypal"
            onPress={() => navigate(ROUTES.WithdrawPaypal)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width_screen,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  depositText: {
    fontSize: height_screen * 0.022,
    width: width_screen,
    fontFamily: FONTS.Medium,

    // fontWeight: "500",
  },
});
