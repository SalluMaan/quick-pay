import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MainButton from "../../components/buttons/MainButton";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen } from "../../utils/dimensions";

export default ForgotPassword = () => {
  const [email, setemail] = useState("");
  const handleLogin = () => {
    console.log("Lofin");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ marginVertical: height_screen * 0.04 }}>
        <TextHead
          text="Reset Password"
          size={height_screen * 0.035}
          position="left"
        />
      </View>
      <TextParagraph
        text="Enter the e-mail associated with your Account and we'll send an e-mail with instructions to reset your password"
        size={height_screen * 0.02}
        position="left"
      />
      <View style={{ marginVertical: height_screen * 0.03 }}>
        <Text_Input
          secureText={false}
          placeholder="Enter your email to reset your password"
          style={[styles.textInput, { backgroundColor: "red" }]}
          setdata={(data) => setemail(data)}
          placeholderColor="#a4a4a4"
          label="Email"
        />
      </View>
      <View style={{ marginVertical: height_screen * 0.05 }}>
        <MainButton text="Sent email" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
});
