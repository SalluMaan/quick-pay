import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import {
  getDepositMethod,
  PayWithBacs,
} from "../../redux/deposit/deposit.actions";
import Color from "../../utils/color";
import { alertMessage } from "../../utils/common/alertToastMessages";
import { checkCurrency } from "../../utils/common/functions";
import { height_screen, width_screen } from "../../utils/dimensions";
import FONTS from "../../utils/fonts";
import ROUTES from "../../utils/routes";
import DepositCard from "./_Part/DepositCard";

export default Deposit = () => {
  const [email, setemail] = useState("");
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [amount, setamount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { login_Session } = useSelector((state) => state?.auth);
  const { methods } = useSelector((state) => state?.deposit);
  const { loading } = useSelector((state) => state.loading);

  useEffect(() => {
    console.log("getDepositMethod", methods);
    // dispatch(getDepositMethod(login_Session?.data.country));
    dispatch(getDepositMethod("Chile"));
  }, []);

  const onClickListener = (data) => {
    if (data === "bacs") {
      console.log("CLICKED", data);
      setModalVisible(true);
    } else {
      console.log("Not Available", data);
    }
  };

  const paymentWithBacs = () => {
    if (amount) {
      const formData = new FormData();
      formData.append("amount", amount);
      formData.append("currency", checkCurrency(login_Session?.data?.currency));
      console.log({ formData });
      PayWithBacs(formData, handleResponse);
    } else {
      alertMessage("Kindly Write Some Amount!");
    }
  };

  const handleResponse = (response) => {
    console.log("REsponse from Pay with Bacs", response);
    setModalVisible(false);
    navigate(ROUTES.BankDeposit2, {
      data: response.data,
    });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <HeaderSimple heading="Deposits" />
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={{ marginVertical: height_screen * 0.01 }}>
          <Text
            style={styles.selectMethodText}
            onPress={() => navigate(ROUTES.DepositMethod)}
          >
            Select Method
          </Text>
        </View>

        {Array.isArray(methods) && methods.length > 0
          ? methods.map((data, id) => (
              <DepositCard
                text={data}
                image={require("../../assets/new/btc.png")}
                key={id}
                onPress={onClickListener}
              />
            ))
          : null}

        {/* <DepositCard
        //   text="Cryptocurrency"
        //   image={require("../../assets/new/btc.png")}
        // />
        // <DepositCard
        //   text="Bank Transfer"
        //   image={require("../../assets/new/balance.png")}
        // />
        // <DepositCard
        //   text="CREDIT/DEBIT Card"
        //   image={require("../../assets/new/visa.png")}
        // /> */}
        <TextHead
          text="Deposit Transaction"
          size={height_screen * 0.022}
          position="left"
          width={width_screen * 0.85}
        />
        <View
          style={{
            flexDirection: "row",
            width: width_screen * 0.85,
            backgroundColor: "#c7c7c7",
            height: height_screen * 0.04,
            alignItems: "center",
            marginTop: height_screen * 0.01,
            // borderWidth: 0.4,
            // borderColor: "#a4a4a4",
          }}
        >
          <Text style={[styles.tableHeading, { width: "28%" }]}>Date</Text>
          <Text style={styles.tableHeading}>Status</Text>
          <Text style={[styles.tableHeading, { width: "17%" }]}>Rate</Text>
          <Text style={[styles.tableHeading, { width: "20%" }]}>Amount</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: width_screen * 0.85,
            backgroundColor: "#fff",
            height: height_screen * 0.04,
            alignItems: "center",
            borderWidth: 0.5,
            borderColor: "#a4a4a4",
          }}
        >
          <Text style={[styles.tableData, { width: "28%" }]}>Jan 12,2019</Text>
          <Text style={[styles.tableData, { color: "blue" }]}>PENDING</Text>
          <Text style={[styles.tableData, { width: "17%" }]}>20$</Text>
          <Text style={[styles.tableData, { width: "20%" }]}>$132.8</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: width_screen * 0.85,
            backgroundColor: "#fff",
            height: height_screen * 0.04,
            alignItems: "center",
            borderWidth: 0.5,
            borderColor: "#a4a4a4",
          }}
        >
          <Text style={[styles.tableData, { width: "28%" }]}>Jan 12,2019</Text>
          <Text style={[styles.tableData, { color: "green" }]}>PENDING</Text>
          <Text style={[styles.tableData, { width: "17%" }]}>20$</Text>
          <Text style={[styles.tableData, { width: "20%" }]}>$132.8</Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <LinearGradient
          colors={[Color.WHITE, Color.WHITE]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.modalView}
        >
          <View>
            <Text style={styles.creditAsk}>
              How much Money You want to Deposit?
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={styles.textInput}
                placeholder={"Enter Amount"}
                placeholderTextColor="#a4a4a4"
                onChangeText={(data) => setamount(data)}
                value={amount}
                keyboardType="number-pad"
              />
              <Text style={styles.creditAsk}>
                {checkCurrency(login_Session?.data?.currency)}
              </Text>
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.BtnModal}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => paymentWithBacs()}>
                <Text style={styles.BtnModal}>Send</Text>
                <View
                  style={{
                    position: "absolute",
                    left: 0,
                    right: width_screen * 0.009,
                    top: 0,
                    bottom: 0,
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  {/* {console.log({ loading })} */}
                  <ActivityIndicator
                    color={Color.LINEAR_CLR_1}
                    animating={loading}
                    size="small"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        {/* <View style={styles.modalView}>
        </View> */}
      </Modal>
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
  selectMethodText: {
    color: "#000",
    width: width_screen * 0.85,
    fontSize: height_screen * 0.025,
    fontFamily: FONTS.Regular,
  },
  tableHeading: {
    paddingLeft: 5,
    width: "35%",
    height: height_screen * 0.04,

    borderWidth: 0.5,
    borderColor: "#a4a4a4",
    paddingTop: height_screen * 0.007,
    fontSize: 12,
    fontFamily: FONTS.Regular,
  },
  tableData: {
    paddingLeft: 5,
    width: "35%",
    height: height_screen * 0.04,

    borderBottomWidth: 0.5,
    borderColor: "#a4a4a4",
    paddingTop: height_screen * 0.007,
    fontSize: 12,
    fontFamily: FONTS.Regular,
  },
  textInput: {
    fontSize: 14,
    fontFamily: FONTS.Regular,
    color: Color.LINEAR_CLR_1,
    alignSelf: "center",
    // height: 60,
    marginVertical: height_screen * 0.015,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.LINEAR_CLR_1,
    width: "80%",
  },
  BtnModal: {
    color: Color.LINEAR_CLR_1,
    fontSize: 16,
    borderWidth: 0.5,
    paddingVertical: height_screen * 0.01,
    borderColor: Color.LINEAR_CLR_1,
    borderRadius: 10,
    width: width_screen * 0.22,
    textAlign: "center",
    paddingRight: width_screen * 0.008,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    alignSelf: "center",
    marginBottom: height_screen * 0.02,
  },
  creditAsk: {
    color: Color.LINEAR_CLR_1,
    fontSize: 15,
    textAlign: "center",
  },
  modalView: {
    flexDirection: "row",
    height: height_screen * 0.25,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F05F3E",
    alignSelf: "center",
    top: height_screen * 0.4,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: Color.LINEAR_CLR_1,
  },
});
