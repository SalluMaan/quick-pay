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

const HeaderSimple = memo(({ heading }) => {
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
      <TouchableOpacity onPress={onBack}>
        <Ionicons
          name="arrow-back-outline"
          size={23}
          color="#fff"
          style={styles.iconEdit}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{heading}</Text>
    </LinearGradient>
  );
});

export default HeaderSimple;

const styles = StyleSheet.create({
  mainHead: {
    width: width_screen,
    height: height_screen * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width_screen * 0.05,
  },
  iconEdit: {
    color: "#fff",
    marginTop: height_screen * 0.005,
  },
  headerText: {
    color: "#fff",
    fontSize: height_screen * 0.025,
    marginLeft: width_screen * 0.01,
  },
});
