import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../utils/routes";
import { AVATAR_IMG, NOT_FOUND } from "../../utils/URL";
import { add } from "react-native-reanimated";
import { register } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import FONTS from "../../utils/fonts";
import English from "../../utils/language/English.json";
import Spanish from "../../utils/language/Spanish.json";

export default Register = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);

  const insets = useSafeAreaInsets();
  const { navigate } = useNavigation();
  const handleClick = () => {
    console.log({ name, email, password });
    if (
      name != "" &&
      email != "" &&
      cpassword != "" &&
      password != "" &&
      contact != "" &&
      country != "" &&
      address != ""
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirmation", cpassword);
      formData.append("contact", contact);
      formData.append("country", country);
      formData.append("address", address);

      // navigate(ROUTES.Home);
      register(formData, navigate);
    } else {
      Alert.alert("", "Kindly Fill all the Fields.");
    }
    // navigate(ROUTES.Home);
  };

  const ENG = English.Register;
  const SP = Spanish.Register;

  // language === "eng"
  // ? ENG.main_Heading
  // : SP.main_Heading

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR,
        paddingTop: insets.top,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <LinearGradient
          colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.registerView}
        >
          <LanguageChooser color="#fff" />
          <View style={styles.logoView}>
            <Image
              source={require("../../assets/logo2.png")}
              style={styles.logoStyle}
            />
          </View>
          <Text
            style={{
              color: "#fff",
              fontSize: height_screen * 0.04,
              // fontWeight: "bold",
              textAlign: "center",
              marginTop: -height_screen * 0.018,
              fontFamily: FONTS.Bold,
            }}
          >
            {language === "eng" ? ENG.main_Heading : SP.main_heading}
          </Text>
        </LinearGradient>
        <View style={styles.registerView2}>
          <ScrollView>
            <View
              style={{
                marginVertical: height_screen * 0.01,
              }}
            >
              <TextParagraph
                text={
                  language === "eng" ? ENG.simple_Heading : SP.simple_heading
                }
                position="center"
              />
            </View>
            <View>
              <Text_Input
                secureText={false}
                placeholder={
                  language === "eng"
                    ? ENG.text_Input_Field_Username_Placeholder
                    : SP.text_Input_Field_Username_Placeholder
                }
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setname(data)}
                placeholderColor="#a4a4a4"
                label={
                  language === "eng"
                    ? ENG.text_Input_Field_Username
                    : SP.text_Input_Field_Username
                }
                height={height_screen * 0.035}
              />
              <Image
                source={{ uri: AVATAR_IMG }}
                style={{
                  height: height_screen * 0.07,
                  width: width_screen * 0.14,
                  borderRadius: 100,
                  borderWidth: 0.5,
                  position: "absolute",
                  borderColor: "#a4a4a4",
                  left: height_screen * 0.32,
                  bottom: 5,
                }}
              />
            </View>
            <Text_Input
              secureText={false}
              placeholder={
                language === "eng"
                  ? ENG.text_Input_Field_Email_Placeholder
                  : SP.text_Input_Field_Email_Placeholder
              }
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setemail(data)}
              placeholderColor="#a4a4a4"
              label={
                language === "eng"
                  ? ENG.text_Input_Field_Email
                  : SP.text_Input_Field_Email
              }
              height={height_screen * 0.035}
            />
            <Text_Input
              secureText={true}
              placeholder={
                language === "eng"
                  ? ENG.text_Input_Field_Password_Placeholder
                  : SP.text_Input_Field_Password_Placeholder
              }
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setpassword(data)}
              placeholderColor="#a4a4a4"
              label={
                language === "eng"
                  ? ENG.text_Input_Field_Password
                  : SP.text_Input_Field_Password
              }
              height={height_screen * 0.035}
              width={width_screen * 0.75}
            />
            <Text_Input
              secureText={true}
              placeholder={
                language === "eng"
                  ? ENG.text_Input_Field_Confirm_Password_Placholder
                  : SP.text_Input_Field_Confirm_Password_Placholder
              }
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setcpassword(data)}
              placeholderColor="#a4a4a4"
              label={
                language === "eng"
                  ? ENG.text_Input_Field_Confirm_Password
                  : SP.text_Input_Field_Confirm_Password
              }
              height={height_screen * 0.035}
              width={width_screen * 0.75}
            />
            <Text_Input
              secureText={false}
              placeholder={
                language === "eng"
                  ? ENG.text_Input_Field_Contact_Placeholder
                  : SP.text_Input_Field_Contact_Placeholder
              }
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setcontact(data)}
              placeholderColor="#a4a4a4"
              label={
                language === "eng"
                  ? ENG.text_Input_Field_Country
                  : SP.text_Input_Field_Contact
              }
              height={height_screen * 0.035}
            />

            <Text_Input
              secureText={false}
              placeholder={
                language === "eng"
                  ? ENG.text_Input_Field_Country_Placeholder
                  : SP.text_Input_Field_Country_Placeholder
              }
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setcountry(data)}
              placeholderColor="#a4a4a4"
              label={
                language === "eng"
                  ? ENG.text_Input_Field_Country
                  : SP.text_Input_Field_Country
              }
              height={height_screen * 0.035}
            />
            <Text_Input
              secureText={false}
              placeholder={
                language === "eng"
                  ? ENG.text_Input_Field_Addres_Placeholder
                  : SP.text_Input_Field_Addres_Placeholder
              }
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setaddress(data)}
              placeholderColor="#a4a4a4"
              label={
                language === "eng"
                  ? ENG.text_Input_Field_Address
                  : SP.text_Input_Field_Address
              }
              height={height_screen * 0.035}
            />
            <TouchableOpacity onPress={() => navigate(ROUTES.Login)}>
              <Text style={styles.forgotText}>
                {language === "eng" ? ENG.link_Text : SP.link_text}
                <Text
                  style={{
                    color: Color.LINEAR_CLR_1,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  {language === "eng" ? ENG.link_to_Login : SP.link_to_login}
                </Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ position: "absolute", bottom: height_screen * 0.04 }}>
          <MainButton
            text={language === "eng" ? ENG.signUp_button : SP.signUp_button}
            onPress={handleClick}
          />
        </View>
        <View style={{ position: "absolute", bottom: 0 }}>
          <VerticalLine />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    height: height_screen,
    width: width_screen,
  },
  forgotText: {
    color: "#a4a4a4",
    marginVertical: height_screen * 0.04,
  },
  registerView: {
    height: height_screen * 0.5,
    width: width_screen,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 50,
  },
  registerView2: {
    width: width_screen * 0.85,
    backgroundColor: "#fff",
    position: "absolute",
    top: height_screen * 0.23,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
    paddingHorizontal: height_screen * 0.01,
  },
  forgotText: {
    color: "#a4a4a4",
    marginVertical: height_screen * 0.02,
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
  logoStyle: {
    height: height_screen * 0.13,
    width: width_screen * 0.25,
    resizeMode: "contain",
  },
  logoView: {
    alignSelf: "center",
  },
});
