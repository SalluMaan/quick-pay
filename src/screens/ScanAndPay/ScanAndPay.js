import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import HeaderHome from "../../components/header/HeaderHome";
import ScanAndPayCard from "./_Part/ScanAndPayCard";

export default ScanAndPay = () => {
  const [email, setemail] = useState("");
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Color.PAGE_BG_COLOR }}>
      <HeaderHome heading="Home" />
      <ScanAndPayCard text="Scan & Pay" amount="22" />
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View
          style={{
            marginTop: height_screen * 0.08,
            marginBottom: height_screen * 0.05,
          }}
        >
          <Image source={require("../../assets/scan.png")} style={styles.img} />
        </View>

        <TextHead text="Note:" />
        <View
          style={{
            width: width_screen * 0.7,
            marginBottom: height_screen * 0.05,
          }}
        >
          <TextParagraph text="You can scan QR code and pay with one click" />
        </View>
        <MainButton text="Scan QR Code" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    width: width_screen,
    justifyContent: "center",
  },
  img: {
    height: height_screen * 0.35,
    width: width_screen * 0.6,
    resizeMode: "contain",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
});
