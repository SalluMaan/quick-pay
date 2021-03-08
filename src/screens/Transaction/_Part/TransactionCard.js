import React, { memo, useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { height_screen, width_screen } from "../../../utils/dimensions";
import { NOT_FOUND } from "../../../utils/URL";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../../utils/color";
import FONTS from "../../../utils/fonts";
import moment from "moment";
const TransactionCard = memo(({ data }) => {
  const format1 = "MMM DD YYYY HH:mm";

  return (
    <View style={styles.mainView}>
      <View style={styles.dateTextView}>
        <Text style={styles.dateText}>
          {moment(data?.paid_at).format(format1)}
        </Text>
      </View>
      <View style={styles.mainCard}>
        <View style={styles.mainCard1}>
          <Text style={styles.transactionType}>Paypal</Text>
        </View>
        <View style={styles.mainCard2}>
          <Text style={styles.amount}>
            <Text style={{ fontSize: height_screen * 0.025 }}>
              {data?.currency_symbol}
            </Text>{" "}
            {data?.amount.toFixed(2)}
          </Text>
          <Text style={styles.fee}>+ 3% QuickiPay Fees</Text>
        </View>
      </View>
    </View>
  );
});

export default TransactionCard;

const styles = StyleSheet.create({
  mainView: {
    width: width_screen,
    height: height_screen * 0.15,
    backgroundColor: "#fff",
    padding: "2%",
    borderBottomColor: "#F8F8F8",
    borderBottomWidth: 0.5,
  },
  dateTextView: {
    width: width_screen * 0.8,
    backgroundColor: "#F8F8F8",
    height: height_screen * 0.05,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    color: "#a4a4a4",
    // fontWeight: "bold",
    fontFamily: FONTS.Bold,
  },
  mainCard: {
    flexDirection: "row",
    padding: "2%",
  },
  mainCard1: {
    width: width_screen * 0.5,
    justifyContent: "center",
    paddingLeft: width_screen * 0.05,
  },
  mainCard2: {
    width: width_screen * 0.5,
  },
  transactionType: {
    fontSize: height_screen * 0.025,
    fontFamily: FONTS.Regular,
  },
  amount: {
    fontSize: height_screen * 0.022,
    textAlign: "center",
    fontFamily: FONTS.Regular,
  },
  fee: {
    color: "green",
    fontSize: height_screen * 0.02,
    fontFamily: FONTS.Regular,
  },
});
