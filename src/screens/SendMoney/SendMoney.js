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
import { Picker } from "@react-native-community/picker";

export default SendMoney = () => {
  const [email, setemail] = useState("");

  return (
    <>
      <HeaderSimple heading="Send Money" />
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <View style={styles.SendMoneyCard}>
          <TextHead text="Send Money" size={height_screen * 0.03} />

          <View
            style={{
              paddingRight: width_screen * 0.03,
              overflow: "hidden",
              marginTop: height_screen * 0.02,
            }}
          >
            <Text_Input
              secureText={false}
              placeholder="Enter email , name or company"
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setemail(data)}
              placeholderColor="#a4a4a4"
              label="Username or email"
            />
          </View>

          <View
            style={{
              paddingRight: width_screen * 0.03,
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: width_screen * 0.3, overflow: "hidden" }}>
              <Text_Input
                secureText={false}
                placeholder="Amount"
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setemail(data)}
                placeholderColor="#a4a4a4"
                label="Balance Details"
              />
            </View>
            <View
              style={{
                width: width_screen * 0.34,
                borderBottomColor: "#a4a4a4",
                borderBottomWidth: 0.6,
              }}
            >
              <Picker
                selectedValue={email}
                style={{ width: "110%", fontSize: 10, color: "#a4a4a4" }}
                onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
              >
                <Picker.Item label="Currency..." value="java" />
                <Picker.Item label="Paypal" value="js" />
              </Picker>
            </View>
          </View>

          <View
            style={{ paddingRight: width_screen * 0.03, overflow: "hidden" }}
          >
            <Text_Input
              secureText={false}
              placeholder="Enter Description Here..."
              style={[styles.textInput, { backgroundColor: "red" }]}
              setdata={(data) => setemail(data)}
              placeholderColor="#a4a4a4"
              label="Description"
            />
          </View>
        </View>
        <View style={{ alignSelf: "center", marginTop: height_screen * 0.03 }}>
          <MainButton text="Send Money" widthBtn={width_screen * 0.5} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height_screen,
    width: width_screen,
    backgroundColor: Color.PAGE_BG_COLOR,
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  SendMoneyCard: {
    backgroundColor: "#fff",
    marginTop: height_screen * 0.04,
    marginHorizontal: height_screen * 0.05,
    borderLeftWidth: 5,
    borderLeftColor: Color.LINEAR_CLR_2,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    paddingHorizontal: width_screen * 0.03,
    overflow: "hidden",
    paddingBottom: height_screen * 0.06,
    borderRadius: 10,
  },
});
