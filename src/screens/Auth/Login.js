import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import ROUTES from "../../utils/routes";

export default Login = () => {
  const [email, setemail] = useState("");
  const { navigate } = useNavigation();

  const handleLogin = () => {
    console.log("Lofin");
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={{ marginVertical: height_screen * 0.04 }}>
          <TextHead text="Sign In To QuickiPay" size={height_screen * 0.035} />
        </View>
        <Text_Input
          secureText={false}
          placeholder="Enter your username or e-mail"
          style={[styles.textInput, { backgroundColor: "red" }]}
          setdata={(data) => setemail(data)}
          placeholderColor="#a4a4a4"
          label="Username or email"
        />
        <Text_Input
          secureText={false}
          placeholder="Enter your password"
          style={[styles.textInput, { backgroundColor: "red" }]}
          setdata={(data) => setemail(data)}
          placeholderColor="#a4a4a4"
          label="Password"
        />
        <TouchableOpacity onPress={() => navigate(ROUTES.ChangePassword)}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <MainButton text="Sign In" onPress={handleLogin} />

        <TouchableOpacity
          style={{ position: "absolute", bottom: height_screen * 0.04 }}
          onPress={() => navigate(ROUTES.Notify)}
        >
          <Text style={styles.forgotText}>
            New to QuickyPay?
            <Text style={{ color: Color.LINEAR_CLR_1 }}>Sign Up</Text>
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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    height: height_screen,
    width: width_screen,
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
});
