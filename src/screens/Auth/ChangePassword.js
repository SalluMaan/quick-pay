import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import { changePassword } from "../../redux/auth/auth.actions";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";

import English from "../../utils/language/English.json";
import Spanish from "../../utils/language/Spanish.json";

export default ChangePassword = () => {
  const [email, setemail] = useState("");
  const [curPass, setcurPass] = useState("");
  const [conPass, setconPass] = useState("");
  const [newPass, setnewPass] = useState("");
  const { navigate } = useNavigation();

  const { language } = useSelector((state) => state.language);
  const ENG = English.Change_Password;
  const SP = Spanish.Change_Password;

  const handleLogin = () => {
    if (curPass && conPass && newPass) {
      const formData = new FormData();
      formData.append("old_password", curPass);
      formData.append("new_password", newPass);
      formData.append("confirm_new_password", conPass);

      changePassword(formData, navigate);
    } else {
      Alert.alert("", "Kindly Fill All the Inputs");
    }
    // console.log("Lofin");
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <HeaderSimple heading="Settings" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View
          style={{
            marginVertical: height_screen * 0.01,
            width: width_screen * 0.8,
          }}
        >
          <TextHead
            text={language === "eng" ? ENG.main_Heading : SP.main_heading}
            size={height_screen * 0.035}
            position="left"
          />
        </View>
        {/* <TextParagraph
          text="Enter the e-mail associated with your Account and we'll send an e-mail with instructions to reset your password"
          size={height_screen * 0.02}
          position="left"
        /> */}
        <View style={{ marginTop: height_screen * 0.04 }}>
          <Text_Input
            secureText={false}
            placeholder="*********"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setcurPass(data)}
            placeholderColor="#a4a4a4"
            label={
              language === "eng"
                ? ENG.text_Input_Field_Current_Password
                : SP.text_Input_field_current_password
            }
          />
        </View>
        <View>
          <Text_Input
            secureText={false}
            placeholder="********"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setconPass(data)}
            placeholderColor="#a4a4a4"
            label={
              language === "eng"
                ? ENG.text_Input_Field_Confirm_Password
                : SP.text_Input_field_confirm_password
            }
          />
        </View>
        <View>
          <Text_Input
            secureText={false}
            placeholder="*********"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setnewPass(data)}
            placeholderColor="#a4a4a4"
            label={
              language === "eng"
                ? ENG.text_Input_Field_New_Password
                : SP.text_Input_field_new_password
            }
          />
        </View>
        <View style={{ marginVertical: height_screen * 0.04 }}>
          <MainButton
            text={
              language === "eng"
                ? ENG.update_Password_Button
                : SP.update_password_button
            }
            onPress={handleLogin}
          />
        </View>
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
});
