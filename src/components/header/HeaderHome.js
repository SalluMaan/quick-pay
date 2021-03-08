import React, { memo, useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { height_screen, width_screen } from "../../utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../utils/color";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../utils/routes";

const headerHome = memo(({ heading }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <LinearGradient
      colors={[Color.LINEAR_CLR_1, Color.LINEAR_CLR_2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[styles.mainHead, { paddingTop: insets.top }]}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="menu-outline"
          size={28}
          color="#fff"
          style={styles.iconEdit}
        />
      </TouchableOpacity>

      <View style={styles.rowCard}>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-outline"
            size={25}
            color="#fff"
            style={styles.iconEdit}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.Notify)}>
          <Ionicons
            name="notifications-outline"
            size={25}
            color="#fff"
            style={styles.iconEdit}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.Profile)}>
          <Ionicons
            name="settings-outline"
            size={25}
            color="#fff"
            style={styles.iconEdit}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
});

export default headerHome;

const styles = StyleSheet.create({
  mainHead: {
    width: width_screen,
    height: height_screen * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width_screen * 0.05,
    backgroundColor: Color.PAGE_BG_COLOR,
    justifyContent: "space-between",
  },
  iconEdit: {
    color: "#fff",
    marginTop: height_screen * 0.005,
    marginRight: width_screen * 0.01,
  },
  headerText: {
    color: "#fff",
    fontSize: height_screen * 0.025,
    marginLeft: width_screen * 0.01,
  },
  rowCard: {
    flexDirection: "row",
  },
});
