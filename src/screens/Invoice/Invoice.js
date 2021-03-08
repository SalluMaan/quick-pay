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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import FONTS from "../../utils/fonts";

export default Invoice = () => {
  const [email, setemail] = useState("");
  const insets = useSafeAreaInsets();
  const text = "Amount due:" + "\n" + "$12.00";
  return (
    <ScrollView
      style={{
        height: height_screen,
        width: width_screen,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <HeaderSimple heading="Invoice" />

        {/* //First Section Company and Invoice Details */}
        <View style={styles.details}>
          <View style={styles.companydetails}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.img}
            />

            <View style={styles.amountText}>
              <Text style={styles.companyName}>Your Company Name#</Text>
              <Text style={styles.companyPhone}>Phone :(1234) 456 897</Text>

              <Text style={styles.companyWeb}>www.company.com</Text>
            </View>
          </View>

          <View style={styles.amountdetails}>
            <LinearGradient
              colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderRadius: 10,
                padding: "3%",
                marginTop: height_screen * 0.1,
              }}
            >
              <TouchableOpacity>
                <Text style={styles.amountBtn}>{text}</Text>
              </TouchableOpacity>
            </LinearGradient>
            <View style={styles.amountText}>
              <Text style={styles.companyPhone2}>Invoice# 01234</Text>
              <Text style={styles.companyPhone2}>Invoice Date Jan 02,2021</Text>
              <Text style={styles.companyPhone2}>Due Date Jan 12,2021</Text>
            </View>
          </View>
        </View>

        {/* ---------Bill Data Table Section------------------- */}
        <View style={{ flex: 1 }}>
          <Text style={styles.textBold}>Bill To:</Text>
          <View style={styles.amountText}>
            <Text style={styles.companyName}>Sarah Smith</Text>
            <Text style={styles.companyPhone}>sarah@hotmail.com</Text>
          </View>
          <View style={styles.tableHeadingView}>
            <Text style={[styles.tableHeading, { width: "25%" }]}>Date</Text>
            <Text style={styles.tableHeading}>Description</Text>
            <Text style={[styles.tableHeading, { width: "15%" }]}>Hours</Text>
            <Text style={[styles.tableHeading, { width: "15%" }]}>Rate</Text>
            <Text style={[styles.tableHeading, { width: "20%" }]}>Amount</Text>
          </View>

          <View style={styles.tableDataView}>
            <Text style={[styles.tableData, { width: "25%" }]}>
              Jan 12,2019
            </Text>
            <Text style={[styles.tableData, { color: "#000" }]}>
              Service #1
            </Text>
            <Text style={[styles.tableData, { width: "15%" }]}>12</Text>
            <Text style={[styles.tableData, { width: "15%" }]}>20$</Text>
            <Text style={[styles.tableData, { width: "20%" }]}>$132.8</Text>
          </View>
          <View style={styles.tableDataView}>
            <Text style={[styles.tableData, { width: "25%" }]}>
              Jan 12,2019
            </Text>
            <Text style={[styles.tableData, { color: "#000" }]}>
              Service #1
            </Text>
            <Text style={[styles.tableData, { width: "15%" }]}>12</Text>
            <Text style={[styles.tableData, { width: "15%" }]}>20$</Text>
            <Text style={[styles.tableData, { width: "20%" }]}>$132.8</Text>
          </View>
          <View style={styles.tableDataView}>
            <Text style={[styles.tableData, { width: "25%" }]}>
              Jan 12,2019
            </Text>
            <Text style={[styles.tableData, { color: "#000" }]}>
              Service #1
            </Text>
            <Text style={[styles.tableData, { width: "15%" }]}>12</Text>
            <Text style={[styles.tableData, { width: "15%" }]}>20$</Text>
            <Text style={[styles.tableData, { width: "20%" }]}>$132.8</Text>
          </View>

          <View style={styles.totalView}>
            <View style={styles.totalView1}></View>
            <View style={styles.totalView2}>
              <View style={styles.totalInnerView}>
                <Text style={styles.text1}>Sub Total</Text>
                <Text style={styles.text2}>$122</Text>
              </View>
              <View
                style={[styles.totalInnerView, { backgroundColor: "#DCDCDC" }]}
              >
                <Text style={styles.text1}>Total</Text>
                <Text style={styles.text2}>$122</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ---------Bill Data Table Section------------------- */}

        <Text style={styles.textBold}>Note:</Text>
        <Text style={[styles.companyName, { width: width_screen * 0.85 }]}>
          Thank You for your business.
        </Text>
        <Text style={styles.textBold}>Term & Conditions</Text>
        <Text style={[styles.companyName, { width: width_screen * 0.85 }]}>
          Please pay your deposit upon recipient of the invoice.
        </Text>

        <Text style={styles.forgotText}>
          POWERED BY{" "}
          <Text style={{ color: Color.LINEAR_CLR_1 }}> QUIKIPAY</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  forgotText: {
    color: "#a4a4a4",
    marginVertical: height_screen * 0.04,
    textAlign: "right",
    width: width_screen * 0.85,
    fontFamily: FONTS.Regular,
  },
  details: {
    flexDirection: "row",
    width: width_screen,
    marginTop: height_screen * 0.02,
  },
  companydetails: {
    width: width_screen * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  amountdetails: {
    width: width_screen * 0.5,
    paddingHorizontal: width_screen * 0.05,
    justifyContent: "center",
  },
  img: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    resizeMode: "contain",
  },
  companyName: {
    color: "#000",
    fontSize: 13,
    marginTop: 1,
    fontFamily: FONTS.Regular,
  },
  companyPhone: {
    color: "#000",
    fontSize: 13,
    marginTop: 1,
    fontFamily: FONTS.Regular,
  },
  companyPhone2: {
    color: "#a4a4a4",
    fontSize: 13,
    marginTop: 1,
    fontFamily: FONTS.Regular,
  },
  companyWeb: {
    color: "#000",
    // fontWeight: "bold",
    marginTop: 1,
    fontFamily: FONTS.SemiBold,
  },
  amountBtn: {
    color: "#fff",
    textAlign: "center",
    fontSize: height_screen * 0.02,
    fontFamily: FONTS.Regular,
  },
  amountText: {
    marginTop: height_screen * 0.01,
    fontFamily: FONTS.Regular,
  },
  textBold: {
    // fontWeight: "bold",
    marginTop: "5%",
    fontSize: height_screen * 0.025,
    textAlign: "left",
    width: width_screen * 0.85,
    fontFamily: FONTS.SemiBold,
  },
  tableHeading: {
    paddingLeft: 5,
    width: "25%",
    height: height_screen * 0.04,

    borderWidth: 0.5,
    borderColor: "#a4a4a4",
    paddingTop: height_screen * 0.007,
    fontSize: 11,
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
  tableData: {
    paddingLeft: 5,
    width: "25%",
    height: height_screen * 0.04,

    borderBottomWidth: 0.5,
    borderColor: "#a4a4a4",
    paddingTop: height_screen * 0.007,
    fontSize: 12,
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
  tableDataView: {
    flexDirection: "row",
    width: width_screen * 0.85,
    backgroundColor: "#fff",
    height: height_screen * 0.04,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#a4a4a4",
  },
  tableHeadingView: {
    flexDirection: "row",
    width: width_screen * 0.85,
    backgroundColor: "#c7c7c7",
    height: height_screen * 0.04,
    alignItems: "center",
    // borderWidth: 0.4,
    // borderColor: "#a4a4a4",
    marginTop: height_screen * 0.02,
  },
  totalView: {
    flexDirection: "row",
    width: width_screen * 0.85,
  },
  totalView1: {
    width: "50%",
  },
  totalView2: {
    width: "50%",
  },
  totalInnerView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: height_screen * 0.045,
    borderWidth: 0.5,
    borderColor: "#a4a4a4",
    backgroundColor: "#fff",
  },
  text1: {
    color: "#a4a4a4",
    width: "60%",
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
  text2: {
    color: "#a4a4a4",
    width: "40%",
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
});
