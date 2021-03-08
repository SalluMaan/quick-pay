import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import TransactionCard from "./_Part/TransactionCard";
import { Ionicons } from "@expo/vector-icons";
import FONTS from "../../utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactions } from "../../redux/transactions/transaction.action";

export default Transaction = () => {
  const [email, setemail] = useState("");
  const { transactions } = useSelector((state) => state?.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("getDepositMethod", transactions);
    // dispatch(getDepositMethod(login_Session?.data.country));
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <HeaderSimple heading="Transactions" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.rowCard}>
          <Text style={styles.transactionHead}>Upcoming Transactions</Text>
          <Text style={styles.transactionNumber}>{transactions?.length}</Text>
          <TouchableOpacity style={{ width: "10%" }}>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#fff"
              style={styles.iconEdit}
            />
          </TouchableOpacity>
        </View>

        {Array.isArray(transactions) && transactions.length > 0
          ? transactions.map((data, id) => (
              <TransactionCard data={data} key={id} />
            ))
          : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width_screen,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  transactionNumber: {
    borderWidth: 0.6,
    paddingVertical: "1%",
    paddingHorizontal: "2%",
    borderColor: "#a4a4a4",
    borderRadius: 5,
    fontFamily: FONTS.Bold,
  },
  transactionNumber2: {
    paddingVertical: "1%",
    paddingHorizontal: "2%",

    fontWeight: "bold",
  },
  rowCard: {
    flexDirection: "row",
    height: height_screen * 0.08,
    width: width_screen * 0.9,
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionHead: {
    // fontWeight: "bold",
    fontFamily: FONTS.Bold,
  },
  iconEdit: {
    color: "#a4a4a4",
    marginTop: height_screen * 0.005,
    textAlign: "center",
  },
});
