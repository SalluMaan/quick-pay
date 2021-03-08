import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import FONTS from "../../utils/fonts";
import ROUTES from "../../utils/routes";
import { NOT_FOUND } from "../../utils/URL";
import AccountCard from "./_Part/AccountCard";

export default Profile = () => {
  const [email, setemail] = useState("");
  const { navigate } = useNavigation();

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
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: NOT_FOUND }} />
          <Text style={styles.nameText}>Ali Ahmad</Text>
        </View>
        <AccountCard text="Email Notification" />
        <AccountCard text="Push Notification" />

        <AccountCard
          text="Manage Account"
          onPress={() => navigate(ROUTES.EditProfile)}
        />
        <AccountCard text="About Us" />
        <AccountCard
          text="Change Password"
          onPress={() => navigate(ROUTES.ChangePassword)}
        />
        <AccountCard text="Logout" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height_screen,
    width: width_screen,
    backgroundColor: Color.PAGE_BG_COLOR,
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  img: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    borderRadius: 100,
    borderWidth: 0.3,
    borderColor: "#a4a4a4",
  },
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: width_screen * 0.1,
    marginVertical: height_screen * 0.03,
  },
  nameText: {
    marginLeft: width_screen * 0.05,
    fontSize: height_screen * 0.02,
    fontFamily: FONTS.Regular,
  },
});
