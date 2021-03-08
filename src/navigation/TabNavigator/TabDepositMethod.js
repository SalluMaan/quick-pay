import React, { Component } from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CryptoTab from "../../screens/TabScreen/TabForDepositMethod/CryptoTab";
import CreditTab from "../../screens/TabScreen/TabForDepositMethod/CreditTab";
import FONTS from "../../utils/fonts";

const Tab = createMaterialTopTabNavigator();

export default TabDepositMethod = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
        showIcon: true,
        iconStyle: {
          marginRight: 20,
        },
        labelStyle: {
          fontSize: 15,
          textTransform: "capitalize",
          fontFamily: FONTS.Medium,
        },

        style: {
          height: 50,
          borderTopWidth: 0,
          shadowOffset: { height: 0, width: 0 },
          shadowColor: "transparent",
          shadowOpacity: 0,
          elevation: 0,
        },
        indicatorStyle: {
          backgroundColor: "transparent",
        },
        activeTintColor: "#000",
        inactiveTintColor: "gray",
        tabStyle: {
          shadowOffset: { height: 0, width: 0 },
          shadowColor: "transparent",
          shadowOpacity: 0,
          elevation: 0,
          height: 50,
          borderBottomWidth: 0.4,
          borderBottomColor: "#a4a4a4",
        },
      }}
    >
      <Tab.Screen
        name="Crypto"
        options={{
          tabBarLabel: "CryptoCurrency",
        }}
        component={CryptoTab}
      />
      <Tab.Screen
        name="Credit"
        options={{
          tabBarLabel: "Credit",
        }}
        component={CreditTab}
      />
      {/* <Tab.Screen name="Nom du salon" navigation={this.props.navigation}
                            options={{
                                tabBarIcon: ({ color }) => (
                <Icon name="calendar-outline" size={40} color={color} style={{width:100,height:100}} />
                                   )
                        
                              }}        
              component={TabB} /> */}
    </Tab.Navigator>
  );
};
