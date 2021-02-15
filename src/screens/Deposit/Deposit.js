import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import DepositCard from "./_Part/DepositCard";

export default Deposit = () => {
  const [email, setemail] = useState("");
  const handleLogin = () => {
    console.log("Lofin");
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <HeaderSimple heading="Deposits" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={{ marginVertical: height_screen * 0.01 }}>
          <Text style={styles.selectMethodText}>Select Method</Text>
        </View>

        <DepositCard text="Cryptocurrency" />
        <DepositCard text="Paypal" />
        <DepositCard text="CREDIT/DEBIT Card" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height_screen,
    width: width_screen,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  selectMethodText: {
    color: "#000",
    width: width_screen * 0.85,
    fontSize: height_screen * 0.025,
  },
});
