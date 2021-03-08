import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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
import ScanAndPayCard from "../ScanAndPay/_Part/ScanAndPayCard";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import HeaderHome from "../../components/header/HeaderHome";
import HomeCard from "../Home/_Part/HomeCard";
import { Picker } from "@react-native-community/picker";
import SmallButton from "../../components/buttons/SmallButton";
import FONTS from "../../utils/fonts";

export default Exchange = () => {
  const [email, setemail] = useState("");
  const insets = useSafeAreaInsets();
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => Color.LINEAR_CLR_2, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Days"], // optional
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderSimple heading="Back" />
      <StatusBar style="dark" />

      <LinearGradient
        colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.exchangeView}
      >
        <Text style={styles.headerText}>Exchange</Text>
      </LinearGradient>

      <View style={styles.container}>
        <View
          style={{
            marginVertical: height_screen * 0.01,
            width: width_screen,
            paddingLeft: width_screen * 0.08,
          }}
        >
          <View style={styles.pickerView}>
            <Picker
              selectedValue={email}
              style={{
                width: "100%",
                fontSize: 10,
                color: "#a4a4a4",
                height: height_screen * 0.05,
                fontFamily: FONTS.Regular,
              }}
              onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
            >
              <Picker.Item label="USD to CLP" value="java" />
              <Picker.Item label="Paypal" value="js" />
            </Picker>
          </View>
        </View>

        <View
          style={{
            height: height_screen * 0.4,
            width: width_screen,
          }}
        >
          <LineChart
            data={data}
            width={width_screen}
            height={height_screen * 0.35}
            chartConfig={{
              backgroundColor: "blue",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => Color.LINEAR_CLR_1,
              labelColor: (opacity = 1) => Color.LINEAR_CLR_1,
              style: {
                borderRadius: 11,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: Color.LINEAR_CLR_1,
                backgroundColor: "red",
              },
            }}
            bezier
            verticalLabelRotation={30}
          />
        </View>

        <View style={styles.formOne}>
          <Text style={styles.formOneHeading}>Local Currency to USD</Text>
          <View style={styles.rowCard}>
            <Text style={styles.formOneText}>ARS</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
            />
            <SmallButton
              text="Max"
              height={height_screen * 0.05}
              width={width_screen * 0.2}
            />
          </View>

          <View style={styles.rowCard}>
            <Text style={styles.formOneText}>CLP</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
            />
            <SmallButton
              text="Max"
              height={height_screen * 0.05}
              width={width_screen * 0.2}
            />
          </View>

          <View style={styles.rowCard}>
            <Text style={styles.formOneText}>SOL</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
            />
            {/* <SmallButton
              text="Max"
              height={height_screen * 0.05}
              width={width_screen * 0.2}
            /> */}
            <Text style={{ width: width_screen * 0.2 }}></Text>
          </View>
          <View style={styles.rowCard}>
            <Text style={{ width: width_screen * 0.15 }}></Text>

            <SmallButton
              text="Exchange"
              height={height_screen * 0.05}
              width={width_screen * 0.3}
            />
            <Text style={styles.formOneText2}>0.110 USD</Text>
          </View>
        </View>

        <View style={styles.formOne}>
          <Text style={styles.formOneHeading}>USD to Local Currency</Text>
          <View style={styles.rowCard}>
            <Text style={styles.formOneText}>USD</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
            />
            <SmallButton
              text="Max"
              height={height_screen * 0.05}
              width={width_screen * 0.2}
            />
          </View>
          {/* 
          <View style={styles.rowCard}>
            <Text style={styles.formOneText}>CLP</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
            />
            <SmallButton
              text="Max"
              height={height_screen * 0.05}
              width={width_screen * 0.2}
            />
          </View> */}

          {/* <View style={styles.rowCard}>
            <Text style={styles.formOneText}>SOL</Text>
            <TextInput
              style={styles.textInput}
              placeholder="0.00"
              onChangeText={(data) => setemail(data)}
              placeholderTextColor="#a4a4a4"
            />
            <Text style={{ width: width_screen * 0.2 }}></Text>
          </View> */}
          <View style={styles.rowCard}>
            <Text style={{ width: width_screen * 0.15 }}></Text>

            <SmallButton
              text="Exchange"
              height={height_screen * 0.05}
              width={width_screen * 0.3}
            />
            <Text style={styles.formOneText2}>0.00 ARS</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: width_screen,
    justifyContent: "center",
  },
  img: {
    height: height_screen * 0.35,
    width: width_screen * 0.6,
    resizeMode: "contain",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  headerText: {
    color: "#fff",
    fontSize: height_screen * 0.027,
    marginLeft: width_screen * 0.01,
    fontFamily: FONTS.SemiBold,
  },
  exchangeView: {
    height: height_screen * 0.08,
    width: width_screen,
    justifyContent: "center",
    paddingHorizontal: height_screen * 0.05,
  },
  pickerView: {
    width: width_screen * 0.5,
    borderColor: "#a4a4a4",
    borderWidth: 1,
    borderRadius: 10,
    height: height_screen * 0.05,
  },
  formOne: {
    backgroundColor: "#f5f5f5",
    width: width_screen * 0.95,
    marginTop: height_screen * 0.03,
    padding: height_screen * 0.03,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  formOneHeading: {
    fontSize: height_screen * 0.018,
    width: "100%",
    textAlign: "left",
    fontFamily: FONTS.Regular,
  },
  rowCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginTop: height_screen * 0.01,
  },
  textInput: {
    width: "50%",
    backgroundColor: "#fff",
    height: height_screen * 0.05,
    paddingLeft: width_screen * 0.01,
    fontFamily: FONTS.Regular,
  },
  formOneText: {
    width: "15%",
    fontSize: height_screen * 0.02,
    fontFamily: FONTS.Regular,
  },
  formOneText2: {
    width: width_screen * 0.35,
    fontSize: height_screen * 0.02,
    backgroundColor: "#fff",
    height: height_screen * 0.05,
    textAlign: "center",
    borderRadius: 10,
    color: "#a4a4a4",
    paddingTop: height_screen * 0.01,
    fontFamily: FONTS.Regular,
  },
});
