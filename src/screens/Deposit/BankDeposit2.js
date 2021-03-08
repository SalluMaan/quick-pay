import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import HeaderSimple2 from "../../components/header/HeaderSimple2";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import DepositCard from "./_Part/DepositCard";
import { Picker } from "@react-native-community/picker";
import Picker_Input from "../../components/Picker_Input/Picker_Input";
import FONTS from "../../utils/fonts";

export default BankDeposit2 = ({ route }) => {
  const [email, setemail] = useState("");
  const handleLogin = () => {
    console.log("Lofin");
  };

  const { data } = route.params;
  console.log("PARAMS", data);
  return (
    <>
      <HeaderSimple2 heading="Deposits" />
      <ScrollView
        style={{
          backgroundColor: Color.PAGE_BG_COLOR,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <StatusBar style="dark" />
          <View style={styles.SendMoneyCard}>
            <TextHead text="Bank Transfer" size={height_screen * 0.035} />

            <View
              style={{
                paddingRight: width_screen * 0.03,
                overflow: "hidden",
                marginTop: height_screen * 0.02,
              }}
            >
              <Picker_Input
                label="Account Name"
                labelOne={data?.account_name}
                height={height_screen * 0.04}
              />
              <Picker_Input
                label="Account Type"
                labelOne={data?.account_type}
                height={height_screen * 0.04}
              />
              <Text_Input
                secureText={false}
                placeholder="Enter your bank name"
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setemail(data)}
                placeholderColor="#a4a4a4"
                label="Bank Name"
                value={data?.bank_name}
              />
              <Text_Input
                secureText={false}
                placeholder="Enter your account number"
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setemail(data)}
                placeholderColor="#a4a4a4"
                label="Account Number"
                value={data?.account_number}
              />
              <Text_Input
                secureText={false}
                placeholder="Enter your email"
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setemail(data)}
                placeholderColor="#a4a4a4"
                label="Email"
                value={data?.email}
              />
              <Text_Input
                secureText={false}
                placeholder="Enter your account"
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setemail(data)}
                placeholderColor="#a4a4a4"
                label="Account"
                value={data?.account_name}
              />
              <Text_Input
                secureText={false}
                placeholder="Enter your rut"
                style={[styles.textInput, { backgroundColor: "red" }]}
                setdata={(data) => setemail(data)}
                placeholderColor="#a4a4a4"
                label="RUT"
                value={data?.rut}
              />

              {/* <TextHead text="Note:" />
              <TextParagraph
                text="You can also submit your transaction id from tokenize link which is already sent to your email."
                size={height_screen * 0.016}
              /> */}
            </View>

            {/* <View
            style={{
              paddingRight: width_screen * 0.03,
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: width_screen * 0.35, overflow: "hidden" }}>
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
                width: width_screen * 0.4,
                borderBottomColor: "#a4a4a4",
                borderBottomWidth: 0.5,
              }}
            >
              <Picker
                selectedValue={email}
                style={{ width: "100%", fontSize: 10, color: "#a4a4a4" }}
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
          </View> */}
          </View>

          {/* ----------------Submit Customer Information--------------- */}

          <View style={[styles.SendMoneyCard, { width: width_screen * 0.9 }]}>
            <TextHead
              text="Customer Information"
              size={height_screen * 0.035}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: height_screen * 0.01,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                }}
              >
                Bank Reciept
              </Text>

              <View style={styles.twoButton}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Color.LINEAR_CLR_2,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    Choose File
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: height_screen * 0.01,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                }}
              >
                Customer ID
              </Text>

              <View style={styles.twoButton}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: Color.LINEAR_CLR_2,
                      fontFamily: FONTS.Regular,
                    }}
                  >
                    Choose File
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              alignSelf: "center",
              marginVertical: height_screen * 0.01,
            }}
          >
            <MainButton text="Submit Request" widthBtn={width_screen * 0.5} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width_screen,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  selectMethodText: {
    color: "#000",
    width: width_screen * 0.85,
    fontSize: height_screen * 0.025,
  },
  SendMoneyCard: {
    backgroundColor: "#fff",
    marginTop: height_screen * 0.02,
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
  twoButton: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: "#a4a4a4",
    height: height_screen * 0.05,
    alignItems: "center",
    width: width_screen * 0.35,
    justifyContent: "space-around",
    borderRadius: 5,
    alignSelf: "center",
  },
});
