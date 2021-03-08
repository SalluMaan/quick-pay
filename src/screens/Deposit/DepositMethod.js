import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import TabDepositMethod from "../../navigation/TabNavigator/TabDepositMethod";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import FONTS from "../../utils/fonts";
import BalanceCard from "./_Part/BalanceCard";

export default DepositMethod = () => {
  const [email, setemail] = useState("");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderSimple heading="Deposit" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <BalanceCard />
        <View
          style={{
            height: height_screen * 0.6,
            width: width_screen,
            marginTop: "5%",
            backgroundColor: "#fff",
            paddingTop: height_screen * 0.01,
            paddingHorizontal: width_screen * 0.05,
          }}
        >
          <Text style={styles.depositText}>Deposit Method</Text>
          <TabDepositMethod />
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
    paddingLeft: width_screen * 0.06,
    // fontWeight: "500",
    fontFamily: FONTS.Medium,
  },
});
