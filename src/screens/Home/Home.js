import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import ScanAndPayCard from "../ScanAndPay/_Part/ScanAndPayCard";
import HeaderHome from "../../components/header/HeaderHome";
import HomeCard from "./_Part/HomeCard";
import TransactionCard from "../Transaction/_Part/TransactionCard";
import HomeBox from "./_Part/HomeBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import publicIP from "react-native-public-ip";
import { getAllInfoByISO } from "iso-country-currency";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import ROUTES from "../../utils/routes";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, getUserSessions } from "../../redux/auth/auth.actions";
import axios from "axios";
import { getLocation2, dataChart } from "../../utils/common/functions";
import { getProfile } from "../../redux/user/user.actions";

export default Home = () => {
  const [email, setemail] = useState("");
  const insets = useSafeAreaInsets();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { login_Session } = useSelector((state) => state?.auth);

  useEffect(() => {
    getIp();
    dispatch(getProfile());
  }, []);

  const getIp = () => {
    publicIP()
      .then((ip) => {
        console.log("Local IP Address", ip);
        dispatch(getLocation(ip));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleResponse = (response) => {
    console.log("Response From Location Api", response);
  };

  const handleClick = () => {
    console.log("Lofin");
    navigate(ROUTES.Transaction);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: Color.PAGE_BG_COLOR }}
    >
      <HeaderHome heading="Home" />
      <HomeCard
        text="Equalent Balance"
        amount={login_Session?.customer_wallet?.usd.toFixed(2)}
      />
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View
          style={{
            height: height_screen * 0.4,
            width: width_screen,
          }}
        >
          <LineChart
            data={dataChart}
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
        <View
          style={{
            marginVertical: height_screen * 0.01,
            flexDirection: "row",
            width: width_screen * 0.95,
            justifyContent: "space-between",
          }}
        >
          <HomeBox
            text="$"
            amount={login_Session?.customer_wallet?.usd.toFixed(1)}
          />
          <HomeBox
            text="ARS"
            amount={login_Session?.customer_wallet?.ars.toFixed(1)}
          />

          <HomeBox
            text="SOL"
            amount={login_Session?.customer_wallet?.sol.toFixed(1)}
          />

          <HomeBox
            text="CLP"
            amount={login_Session?.customer_wallet?.clp.toFixed(1)}
          />
        </View>

        <View
          style={{
            width: width_screen * 0.85,
            marginVertical: height_screen * 0.01,
          }}
        >
          <TextHead
            text="Latest Transactions"
            size={height_screen * 0.025}
            onPress={handleClick}
          />
        </View>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />

        {/* <View
          style={{
            marginTop: height_screen * 0.08,
            marginBottom: height_screen * 0.05,
          }}
        >
          <Image source={require("../../assets/scan.png")} style={styles.img} />
        </View>

        <TextHead text="Note:" />
        <View
          style={{
            width: width_screen * 0.7,
            marginBottom: height_screen * 0.05,
          }}
        >
          <TextParagraph text="You can scan QR code and pay with one click" />
        </View>
        <MainButton text="Scan QR Code" /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PAGE_BG_COLOR,
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
});
