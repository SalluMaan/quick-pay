import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MainButton from "../../components/buttons/MainButton";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import ROUTES from "../../utils/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import English from "../../utils/language/English.json";
import Spanish from "../../utils/language/Spanish.json";
import { useSelector } from "react-redux";
import { forgotPassword } from "../../redux/auth/auth.actions";

export default ForgotPassword = () => {
  const [email, setemail] = useState("");
  const { navigate } = useNavigation();
  const handleLogin = () => {
    if (email) {
      const formData = new FormData();
      formData.append("email", email);
      forgotPassword(email, navigate);
    } else {
      Alert.alert("", "Kindly Write Correct Email Address.");
    }
  };
  const { language } = useSelector((state) => state.language);

  const ENG = English.Forget_Password;
  const SP = Spanish.Forget_Password;

  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{ width: "45%", flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity onPress={onBack}>
            <Ionicons
              name="arrow-back-outline"
              size={23}
              color="#fff"
              style={styles.iconEdit}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Back</Text>
        </View>
        <View style={{ width: "45%" }}>
          <LanguageChooser />
        </View>
      </View>

      <View style={{ marginTop: height_screen * 0.1 }}>
        <View style={{ marginVertical: height_screen * 0.04 }}>
          <TextHead
            text={language === "eng" ? ENG.main_Heading : SP.main_Heading}
            size={height_screen * 0.035}
            position="left"
          />
        </View>
        <TextParagraph
          text={language === "eng" ? ENG.simple_Heading : SP.simple_Heading}
          size={height_screen * 0.02}
          position="left"
        />
        <View style={{ marginVertical: height_screen * 0.04 }}>
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
          />
        </View>
        <View style={{ marginVertical: height_screen * 0.05 }}>
          <MainButton
            text={
              language === "eng" ? ENG.send_Email_Button : SP.send_Email_Button
            }
            onPress={handleLogin}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  iconEdit: {
    color: "#000",
    marginTop: height_screen * 0.005,
  },
  headerText: {
    color: "#000",
    fontSize: height_screen * 0.024,
    marginLeft: width_screen * 0.01,
  },
});
