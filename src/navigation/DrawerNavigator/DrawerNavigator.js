import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import TextHead from "../../components/TextLabel/TextHead";
import Home from "../../screens/Home/Home";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import { NOT_FOUND } from "../../utils/URL";
import AuthNavigator from "../StackNavigator/AuthNavigator";
import ROUTES from "../../utils/routes";
import { Ionicons } from "@expo/vector-icons";
import PrivateNavigator from "../StackNavigator/PrivateNavigator";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/auth.actions";
import FONTS from "../../utils/fonts";

export default function MyDrawer({ navigation }) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home-Drawer"
        component={PrivateNavigator}
        options={{ drawerLabel: "Home" }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const { login_Session } = useSelector((state) => state?.auth);
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: height_screen,
          marginHorizontal: height_screen * 0.03,
        }}
      >
        {console.log({ login_Session })}
        <View style={styles.userPannel}>
          <Image source={{ uri: NOT_FOUND }} style={styles.img} />
          <TextHead text={login_Session?.name} size={height_screen * 0.03} />
          <Ionicons
            name="menu-outline"
            size={25}
            color={Color.LINEAR_CLR_1}
            style={styles.iconEdit}
          />
        </View>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Home)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.img2}
            />
          </View>
          <Text style={[styles.textDrawer, { color: Color.LINEAR_CLR_1 }]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Transaction)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/transaction.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Transactions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Deposit)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/money.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Deposit Money</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Withdraw)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/withdraw.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Kyc_Profile)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/kyc.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>KYC</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Exchange)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/transaction.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Exchange</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.SendMoney)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/balance.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Share Balance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.drawerContent,
            {
              borderBottomWidth: 0.3,
              borderBottomColor: "#a4a4a4",
              paddingBottom: height_screen * 0.02,
            },
          ]}
          onPress={() => props.navigation.navigate(ROUTES.ScanAndPay)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/scan.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Send Money</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => dispatch(logout())}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/share.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Share with Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerContent}
          onPress={() => props.navigation.navigate(ROUTES.Invoice)}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../assets/new/info.png")}
              style={styles.img2}
            />
          </View>
          <Text style={styles.textDrawer}>Help & Feedback</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  img: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    borderRadius: 100,
    borderWidth: 0.3,
    borderColor: "#a4a4a4",
  },
  img2: {
    height: height_screen * 0.035,
    width: width_screen * 0.07,
    resizeMode: "contain",
  },
  userPannel: {
    height: height_screen * 0.25,
    borderBottomWidth: 0.3,
    borderBottomColor: "#a4a4a4",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerContent: {
    marginTop: height_screen * 0.03,
    flexDirection: "row",
    alignItems: "center",
  },
  textDrawer: {
    color: "#a4a4a4",
    fontFamily: FONTS.Regular,
  },
  imgView: {
    width: "25%",
  },
  iconEdit: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
