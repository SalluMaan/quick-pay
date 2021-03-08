import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import ROUTES from "../../utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import English from "../../utils/language/English.json";
import Spanish from "../../utils/language/Spanish.json";
import FONTS from "../../utils/fonts";
export default CheckMail = () => {
  const [email, setemail] = useState("");
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  const handleLogin = () => {
    console.log("Lofin");
    Linking.openURL("mailto:"); // iOS

    // if (Platform.OS === "android") {
    //   NativeModules.UIMailLauncher.launchMailApp(); // UIMailLauncher is the
    //   return;
    // } else {
    //   Linking.openURL("inbox:0"); // iOS
    // }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      <LanguageChooser />

      <LinearGradient
        colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.emailIcon}
      >
        <FontAwesome5
          name="envelope-open-text"
          size={45}
          color="#fff"
          style={styles.iconEdit}
        />
      </LinearGradient>

      <View style={{ marginVertical: height_screen * 0.04 }}>
        <TextHead
          text="Check Your Email"
          position="center"
          size={height_screen * 0.035}
        />

        <Text style={styles.someText}>
          We have sent a password recovery instructions to your mail
        </Text>
      </View>

      <MainButton text="Open Email App" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigate(ROUTES.ChangePassword)}>
        <Text style={styles.someText}>Skip,I'll confirm later.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ position: "absolute", bottom: height_screen * 0.04 }}
        onPress={() => navigate(ROUTES.ForgotPassword)}
      >
        <Text style={styles.forgotText}>
          Did not receieve the email?check your span filter or
          <Text
            style={{ color: Color.LINEAR_CLR_1, fontFamily: FONTS.Regular }}
          >
            {" "}
            try another e-mail address
          </Text>
        </Text>
      </TouchableOpacity>

      <View style={{ position: "absolute", bottom: height_screen * 0.02 }}>
        <VerticalLine />
      </View>
      {/* <TextParagraph
        text="Enter the email associated with your Account and "
        size={height_screen * 0.02}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    height: height_screen,
    width: width_screen,
    flex: 1,
  },
  forgotText: {
    color: "#a4a4a4",
    marginVertical: height_screen * 0.04,
    width: width_screen * 0.8,
    textAlign: "center",
    fontSize: height_screen * 0.018,
    fontFamily: FONTS.Regular,
  },
  someText: {
    alignSelf: "center",
    width: width_screen * 0.6,
    color: "#a4a4a4",
    textAlign: "center",
    fontSize: height_screen * 0.018,
    marginVertical: height_screen * 0.02,
    fontFamily: FONTS.Regular,
  },
  emailIcon: {
    height: height_screen * 0.1,
    width: width_screen * 0.25,
    marginTop: height_screen * 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
