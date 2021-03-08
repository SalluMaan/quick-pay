import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
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
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";
import { NOT_FOUND } from "../../utils/URL";
import Kyc_Card from "./_Part/Kyc_Card";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../utils/routes";
import FONTS from "../../utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { getUserKyc } from "../../redux/kyc/kyc.actions";
export default Kyc_Profile = () => {
  const [email, setemail] = useState("");
  const otpInput = useRef(null);
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();
  const img = "";
  const { kyc } = useSelector((state) => state.kyc);
  const imageBase64 = "data:image/png;base64,";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserKyc());
  }, [dispatch]);

  return (
    <ScrollView
      style={{
        height: height_screen,
        width: width_screen,
        paddingTop: insets.top,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />

        <View
          style={{
            marginTop: height_screen * 0.01,
            backgroundColor: "#fff",
            width: width_screen,
            alignItems: "center",
            height: height_screen * 0.34,
          }}
        >
          {console.log("KYC_______________________________KYC", kyc)}
          <View style={styles.logo}>
            {/* <Image source={require("./../../assets/logo.png")} /> */}
            <Image
              source={{
                uri: kyc ? imageBase64 + kyc?.document_image : NOT_FOUND,
              }}
              style={styles.img}
            />
          </View>
          <TextHead text={"Angilee"} size={height_screen * 0.03} />

          <Text
            style={{
              fontSize: height_screen * 0.015,
              marginTop: height_screen * 0.01,
              fontFamily: FONTS.Regular,
            }}
          >
            YOUR KYC IS NOT APPROVED
          </Text>
        </View>
        <View
          style={{
            marginTop: height_screen * 0.01,
            backgroundColor: "#fff",
            width: width_screen,
            alignItems: "center",
          }}
        >
          <Text style={styles.textStyle}>Add to Profile</Text>
          <Kyc_Card
            text="Proof of Address"
            btnTitle="Scan"
            iconName="id-card"
          />

          <Kyc_Card text="E-mail" btnTitle="Verify" iconName="envelope" />
          <Kyc_Card text="Phone Number" btnTitle="Verify" iconName="phone" />

          <Text style={styles.textStyle}>Profile</Text>
          <Kyc_Card
            text="National ID Card"
            btnTitle="Upload"
            iconName="address-book"
            onPress={() => navigate(ROUTES.AutheticateAccount)}
            label="ID FRONT"
            labelTrue={true}
          />
          <Kyc_Card
            text="National ID Card"
            btnTitle="Upload"
            iconName="address-book"
            onPress={() => navigate(ROUTES.Kyc_ID)}
            label="ID BACK"
            labelTrue={true}
          />
        </View>
        <View style={{ marginTop: height_screen * 0.04 }}>
          <MainButton text="Submit Request" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    height: height_screen,
    width: width_screen,
  },
  forgotText: { color: "#a4a4a4", fontSize: 10 },
  logo: {
    height: height_screen * 0.16,
    marginTop: height_screen * 0.05,
    width: width_screen,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    width: width_screen * 0.8,
    textAlign: "left",
    fontSize: 13,
    marginTop: height_screen * 0.03,
    color: "#a4a4a4",
    fontFamily: FONTS.Regular,
  },
  twoButton: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: "#a4a4a4",
    height: height_screen * 0.05,
    alignItems: "center",
    width: width_screen * 0.35,
    justifyContent: "space-around",
    borderRadius: 5,
  },
  pickerView: {
    width: width_screen * 0.8,
    alignSelf: "center",
    marginTop: "2%",
    borderWidth: 1,
    borderColor: Color.LINEAR_CLR_1,
    borderRadius: 10,
  },
  sideText: { width: "50%", color: "#a4a4a4" },
  btnView: { width: "50%", alignSelf: "center" },
  mainView: {
    width: width_screen * 0.85,
    alignSelf: "center",
    marginTop: height_screen * 0.07,
    flexDirection: "row",
  },
  pickerStyle: {
    width: "100%",
    fontSize: 10,
    color: "#000",
    height: 45,
  },
  img: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#a4a4a4",
  },
});
