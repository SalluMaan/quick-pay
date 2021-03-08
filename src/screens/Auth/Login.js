import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
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
import AsyncStorage from "@react-native-async-storage/async-storage";

import English from "../../utils/language/English.json";
import Spanish from "../../utils/language/Spanish.json";
import { useDispatch, useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { login } from "../../redux/auth/auth.actions";
import Splash from "../Splash/Splash";
import FONTS from "../../utils/fonts";

export default Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { authloading } = useSelector((state) => state.loading);

  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem("user");
    const data = JSON.parse(token);
    console.log({ data });
  };

  const { language } = useSelector((state) => state.language);

  const handleLogin = () => {
    if (email != "" && password != "") {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      // navigate(ROUTES.Home);
      dispatch(login(formData, navigate));
    } else {
      Alert.alert("", "Kindly Fill all the Fields.");
    }
  };

  if (authloading) {
    return <Splash />;
  } else {
    return (
      <ScrollView
        style={{
          height: height_screen,
          width: width_screen,
          paddingTop: insets.top,
        }}
      >
        <View style={styles.container}>
          {/* <Text style={{ color: "#000" }}>{language ? language : "00"}</Text> */}
          <StatusBar style="dark" />
          <LanguageChooser />
          <Image
            source={require("../../assets/new/logo.png")}
            style={styles.logoStyle}
          />
          <View style={{ marginVertical: height_screen * 0.02 }}>
            <TextHead
              text={
                language === "eng"
                  ? English.Login.main_Heading
                  : Spanish.Login.main_Heading
              }
              size={height_screen * 0.035}
            />
          </View>
          <Text_Input
            secureText={false}
            placeholder={
              language === "eng"
                ? English.Login.text_Input_Field_User_Name_Placeholder
                : Spanish.Login.text_Input_Field_User_Name_Placeholder
            }
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label={
              language === "eng"
                ? English.Login.text_Input_Field_User_Name
                : Spanish.Login.text_Input_Field_User_Name
            }
          />
          <Text_Input
            secureText={true}
            placeholder={
              language === "eng"
                ? English.Login.text_Input_Field_Password_Placeholder
                : Spanish.Login.text_Input_Field_Password_Placeholder
            }
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setpassword(data)}
            placeholderColor="#a4a4a4"
            label={
              language === "eng"
                ? English.Login.text_Input_Field_Password
                : Spanish.Login.text_Input_Field_Password
            }
            width={width_screen * 0.75}
          />
          <TouchableOpacity onPress={() => navigate(ROUTES.ForgotPassword)}>
            <Text style={styles.forgotText}>
              {language === "eng"
                ? English.Login.link_Forgot_Password
                : Spanish.Login.link_Forgot_Password}
              ?
            </Text>
          </TouchableOpacity>
          <MainButton
            text={
              language === "eng"
                ? English.Login.Login_Btn
                : Spanish.Login.Login_Btn
            }
            onPress={handleLogin}
          />

          <TouchableOpacity
            style={{ position: "absolute", bottom: height_screen * 0.04 }}
            onPress={() => navigate(ROUTES.Register)}
          >
            <Text style={styles.forgotText}>
              {language === "eng"
                ? English.Login.link_Sign_up
                : Spanish.Login.link_Sign_up}
              <Text style={{ color: Color.LINEAR_CLR_1 }}>
                {language === "eng"
                  ? English.Login.Sign_up
                  : Spanish.Login.Sign_up}
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
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    width: width_screen,
    height: height_screen,
  },
  forgotText: {
    color: "#a4a4a4",
    marginVertical: height_screen * 0.04,
    fontFamily: FONTS.Regular,
  },
  logoStyle: {
    marginTop: height_screen * 0.05,
    height: height_screen * 0.2,
    width: width_screen * 0.4,
    resizeMode: "contain",
  },
});
