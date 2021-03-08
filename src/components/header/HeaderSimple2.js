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

const HeaderSimple2 = memo(({ heading }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={[styles.mainHead, { paddingTop: insets.top }]}>
      <TouchableOpacity onPress={onBack}>
        <Ionicons
          name="arrow-back-outline"
          size={23}
          color="#fff"
          style={styles.iconEdit}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{heading}</Text>
    </View>
  );
});

export default HeaderSimple2;

const styles = StyleSheet.create({
  mainHead: {
    width: width_screen,
    height: height_screen * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width_screen * 0.05,
    backgroundColor: Color.PAGE_BG_COLOR,
  },
  iconEdit: {
    color: "#000",
    marginTop: height_screen * 0.005,
  },
  headerText: {
    color: "#000",
    fontSize: height_screen * 0.025,
    marginLeft: width_screen * 0.01,
  },
});
