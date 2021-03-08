import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../../components/buttons/MainButton";
import HeaderSimple from "../../../components/header/HeaderSimple";
import Color from "../../../utils/color";
import { height_screen, width_screen } from "../../../utils/dimensions";
import FONTS from "../../../utils/fonts";

export default CryptoTab = () => {
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
        <Image
          style={styles.img}
          source={require("../../../assets/qrcode.png")}
        />
        <Text style={styles.addressText}>Your ETH Address</Text>
        <Text style={styles.addressText2}>fg34567y8uervtbyn4567y8wertybn</Text>
        <Text style={styles.addressText1}>Tap to copy it.</Text>

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
    fontFamily: FONTS.Regular,
  },
  addressText1: {
    marginTop: height_screen * 0.02,
    fontSize: height_screen * 0.012,
    color: "#a4a4a4",
    fontFamily: FONTS.Regular,
  },
  addressText2: {
    marginTop: height_screen * 0.02,
    padding: "3%",
    backgroundColor: Color.PAGE_BG_COLOR,
    fontFamily: FONTS.Regular,
  },
  btnView: {
    marginTop: height_screen * 0.03,
  },
});
