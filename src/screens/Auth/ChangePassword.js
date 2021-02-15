import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";

export default ChangePassword = () => {
  const [email, setemail] = useState("");
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
      <HeaderSimple heading="Settings" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={{ marginVertical: height_screen * 0.01 }}>
          <TextHead
            text="Reset Password"
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
            placeholder="Current Password"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Current Password"
          />
        </View>
        <View>
          <Text_Input
            secureText={false}
            placeholder="New Password"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="New Password"
          />
        </View>
        <View>
          <Text_Input
            secureText={false}
            placeholder="Confirm Password"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Confirm Password"
          />
        </View>
        <View style={{ marginVertical: height_screen * 0.04 }}>
          <MainButton text="Update Password" onPress={handleLogin} />
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
