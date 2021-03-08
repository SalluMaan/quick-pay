import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import TabDepositMethod from "../../navigation/TabNavigator/TabDepositMethod";
import TabWithdraw from "../../navigation/TabNavigator/TabWithdraw";
import { getAccountTypes } from "../../redux/user/user.actions";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import FONTS from "../../utils/fonts";
import BalanceCard from "../Deposit/_Part/BalanceCard";
import WithdrawCard from "./_Part/WithdrawCard";

export default Withdraw = () => {
  const [email, setemail] = useState("");

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
        <WithdrawCard />
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
          <TouchableOpacity
            style={{
              height: height_screen * 0.06,
              // backgroundColor: Color.LINEAR_CLR_2,
              width: width_screen * 0.95,
              alignSelf: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: Color.LINEAR_CLR_2,
              marginTop: height_screen * 0.02,
              paddingLeft: width_screen * 0.05,
            }}
          >
            <Text
              style={{ color: Color.LINEAR_CLR_1, fontFamily: FONTS.Medium }}
            >
              International Bank
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: height_screen * 0.06,
              // backgroundColor: Color.LINEAR_CLR_2,
              width: width_screen * 0.95,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: Color.LINEAR_CLR_2,
              marginTop: height_screen * 0.01,
            }}
          >
            <Text
              style={{ color: Color.LINEAR_CLR_1, fontFamily: FONTS.Medium }}
            >
              Local Bank
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: height_screen * 0.06,
              // backgroundColor: Color.LINEAR_CLR_2,
              width: width_screen * 0.95,
              alignSelf: "center",
              // alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderBottomWidth: 0.5,
              borderBottomColor: Color.LINEAR_CLR_2,
              marginTop: height_screen * 0.01,
              paddingLeft: width_screen * 0.05,
            }}
          >
            <Text
              style={{ color: Color.LINEAR_CLR_1, fontFamily: FONTS.Medium }}
            >
              Local Bank
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: height_screen * 0.06,
              // backgroundColor: Color.LINEAR_CLR_2,
              width: width_screen * 0.95,
              alignSelf: "center",
              // alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              borderBottomWidth: 0.5,
              borderBottomColor: Color.BLACK,
              marginTop: height_screen * 0.01,
              paddingLeft: width_screen * 0.05,
            }}
          >
            <Text style={{ color: Color.BLACK, fontFamily: FONTS.Medium }}>
              Local Bank
            </Text>
          </TouchableOpacity>

          {/* <TabWithdraw /> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height_screen,
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
