import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import publicIP from "react-native-public-ip";
import { useDispatch } from "react-redux";
import { getLocation } from "../../redux/auth/auth.actions";

export default Splash = () => {
  const [email, setemail] = useState("");
  const insets = useSafeAreaInsets();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getIp();
  // }, []);

  // const getIp = () => {
  //   publicIP()
  //     .then((ip) => {
  //       console.log("Local IP Address", ip);
  //       dispatch(getLocation(ip));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <LinearGradient
      colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={require("../../assets/logo2.png")} style={styles.img} />
        <View style={styles.TextView}>
          <Text style={styles.forgotText1}>
            Quiki <Text style={{ fontWeight: "bold" }}>Pay</Text>
          </Text>
          <Text style={styles.forgotText2}>
            Powered by <Text style={{ fontWeight: "bold" }}>QIOCKEX</Text>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  forgotText1: { color: "#fff", fontSize: height_screen * 0.06 },
  forgotText2: { color: "#fff", fontSize: height_screen * 0.016 },

  img: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    resizeMode: "contain",
  },
  TextView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
