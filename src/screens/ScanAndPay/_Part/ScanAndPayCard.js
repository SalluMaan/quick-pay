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
import { height_screen, width_screen } from "../../../utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Color from "../../../utils/color";
import FONTS from "../../../utils/fonts";

const ScanAndPayCard = memo(({ text, amount }) => {
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
      style={styles.mainHead}
    >
      <Text style={styles.headerText}>{text}</Text>
      <Text
        style={[
          styles.headerText,
          { fontSize: height_screen * 0.06, fontWeight: "normal" },
        ]}
      >
        $ <Text style={{ fontSize: height_screen * 0.05 }}>{amount}</Text>
      </Text>

      <View style={styles.rowCard}></View>
    </LinearGradient>
  );
});

export default ScanAndPayCard;

const styles = StyleSheet.create({
  mainHead: {
    width: width_screen,
    height: height_screen * 0.12,
    paddingHorizontal: width_screen * 0.05,
    backgroundColor: Color.PAGE_BG_COLOR,
  },
  iconEdit: {
    color: "#fff",
    marginTop: height_screen * 0.005,
    marginRight: width_screen * 0.01,
  },
  headerText: {
    color: "#fff",
    fontSize: height_screen * 0.022,
    marginLeft: width_screen * 0.01,
    // fontWeight: "bold",
    fontFamily: FONTS.Bold,
  },
  rowCard: {
    flexDirection: "row",
  },
});
