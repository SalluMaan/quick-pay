import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
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
import { FontAwesome5 } from "@expo/vector-icons";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import OTPTextInput from "react-native-otp-textinput";
import FONTS from "../../utils/fonts";

export default AutheticateAccount = () => {
  const [email, setemail] = useState("");
  const otpInput = useRef(null);

  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.logo}>
          <Image
            source={require("../../assets/new/logo.png")}
            style={styles.logoStyle}
          />
        </View>
        <View style={styles.registerView2}>
          <FontAwesome5
            name="shield-alt"
            size={40}
            color="#fff"
            style={styles.iconEdit}
          />
          <Text style={styles.textHead}>Authenticate your Account</Text>
          <Text style={styles.TextParagraph}>
            Protecting your payments is our top priority. Please confirm your
            account by entering the authorization code sent to {"\n"}
            ***_***_097{" "}
          </Text>
          <View
            style={{
              width: "90%",
              overflow: "hidden",
              alignSelf: "center",
              marginVertical: height_screen * 0.02,
            }}
          >
            <OTPTextInput
              inputCount={6}
              textInputStyle={{ width: "10%", borderColor: "pink" }}
              tintColor={Color.LINEAR_CLR_1}
              offTintColor={Color.BLACK}
              handleTextChange={(e) => console.log("Code", e)}
            />
          </View>
          <View style={styles.rowCard}>
            <View style={styles.card1}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>
                  It takes a minute to receive your code. Haven't received yet?
                  <Text style={{ color: Color.LINEAR_CLR_1 }}>
                    {" "}
                    Resend a new code.
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card2}>
              <MainButton
                text="Submit"
                height={height_screen * 0.05}
                width={width_screen * 0.28}
                paddingTop={0}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: height_screen,
    width: width_screen,
  },
  forgotText: { color: "#a4a4a4", fontSize: 10, fontFamily: FONTS.Regular },
  logo: {
    height: height_screen * 0.2,
    marginTop: height_screen * 0.05,
  },
  registerView2: {
    width: width_screen * 0.85,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    paddingHorizontal: height_screen * 0.01,
    paddingBottom: "5%",
  },
  iconEdit: {
    color: Color.LINEAR_CLR_2,
    marginTop: height_screen * 0.005,
    textAlign: "center",
    paddingVertical: "5%",
  },
  textHead: {
    fontSize: height_screen * 0.025,
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
  TextParagraph: {
    width: width_screen * 0.7,
    alignSelf: "center",
    textAlign: "center",
    color: "#a4a4a4",
    fontSize: height_screen * 0.017,
    fontFamily: FONTS.Regular,
  },
  rowCard: {
    flexDirection: "row",
    width: "100%",
  },
  card1: {
    width: "60%",
    justifyContent: "center",
  },
  card2: {
    width: "40%",
  },

  logoStyle: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    resizeMode: "contain",
  },
});
