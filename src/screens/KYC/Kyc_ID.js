import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";
import VerticalLine from "../../components/VerticalLine/VerticalLine";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";
import FONTS from "../../utils/fonts";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { addKycProfile } from "../../redux/kyc/kyc.actions";
import { useDispatch } from "react-redux";

import * as FileSystem from "expo-file-system";

export default Kyc_ID = () => {
  const [email, setemail] = useState("national_id");
  const otpInput = useRef(null);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const imageBase64 = "data:image/png;base64";
  const [imageUri, setimageUri] = useState("");
  const [imageUri2, setimageUri2] = useState("");

  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage2(result);
      makeFileUri(result);
    }
  };

  const makeFileUri = (uri) => {
    var uri_1 = "";
    var uri_2 = "";

    FileSystem.readAsStringAsync(uri.uri, {
      encoding: FileSystem.EncodingType.Base64,
    }).then((res) => {
      // console.log("Response uri_2 uri_2", res);
      // uri_2 = res;
      const response1 = res;
      setimageUri(response1);
      FileSystem.readAsStringAsync(image.uri, {
        encoding: FileSystem.EncodingType.Base64,
      }).then((res) => {
        // console.log("Response uri_1 uri_1", res);
        // uri_1 = res;
        setimageUri2(res);
        const response2 = res;
        onClickListener(uri, response1, response2);
      });
    });
  };

  const onClickListener = (uri, data, data2) => {
    const formData = new FormData();
    formData.append("document_type", email);
    formData.append("document_image", {
      uri: image.uri,
      type: uri.type + "/jpg",
      name: "Document",
    });

    formData.append("face_image", {
      uri: image2.uri,
      type: image.type + "/jpg",
      name: "Document",
    });
    // console.log("Response", formData);
    // dispatch(addKycProfile(formData));
    addKycProfile(formData);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: Color.PAGE_BG_COLOR,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.logo}>
          <Image
            source={require("../../assets/new/logo.png")}
            style={styles.logoStyle}
          />
        </View>
        <TextHead text="Angilee" size={height_screen * 0.03} />

        <Text
          style={{
            fontSize: height_screen * 0.015,
            fontFamily: FONTS.Regular,
            marginTop: height_screen * 0.01,
          }}
        >
          YOUR KYC IS NOT APPROVED
        </Text>

        <Text style={styles.textStyle}>Document</Text>

        <View style={styles.pickerView}>
          <Picker
            style={styles.pickerStyle}
            selectedValue={email}
            onValueChange={(itemValue, itemIndex) => setemail(itemValue)}
            itemStyle={{
              fontSize: 10,
              fontFamily: FONTS.Regular,
            }}
          >
            <Picker.Item label="National ID" value="national_id" />
            <Picker.Item label="Passport" value="passport" />
          </Picker>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.sideText}>Front Side</Text>
          <Text style={styles.sideText}>Back Side</Text>
        </View>
        <View style={styles.mainView2}>
          <Image
            source={
              image ? { uri: image.uri } : require("../../assets/idcard.png")
            }
            style={styles.idcardStyles}
          />
          <Image
            source={
              image2 ? { uri: image2.uri } : require("../../assets/idcard.png")
            }
            style={styles.idcardStyles}
          />
        </View>

        <View style={styles.mainView2}>
          <View style={styles.btnView}>
            <View style={styles.twoButton}>
              <TouchableOpacity onPress={pickImage}>
                <Text style={{ fontFamily: FONTS.Regular }}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage(null)}>
                <Text
                  style={{
                    color: Color.LINEAR_CLR_2,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnView}>
            <View style={styles.twoButton}>
              <TouchableOpacity onPress={pickImage2}>
                <Text style={{ fontFamily: FONTS.Regular }}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setImage2(null)}>
                <Text
                  style={{
                    color: Color.LINEAR_CLR_2,
                    fontFamily: FONTS.Regular,
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PAGE_BG_COLOR,
    alignItems: "center",
    height: height_screen,
    width: width_screen,
  },
  forgotText: { color: "#a4a4a4", fontSize: 10 },
  logo: {
    height: height_screen * 0.16,
    marginTop: height_screen * 0.1,
  },
  textStyle: {
    width: width_screen * 0.8,
    textAlign: "left",
    fontSize: 15,
    marginTop: height_screen * 0.03,
    fontFamily: FONTS.Regular,
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
  pickerView: {
    width: width_screen * 0.8,
    alignSelf: "center",
    marginTop: "2%",
    borderWidth: 1,
    borderColor: Color.LINEAR_CLR_1,
    borderRadius: 10,
  },
  sideText: { width: "50%", color: "#a4a4a4", fontFamily: FONTS.Regular },
  btnView: { width: "50%", alignSelf: "center" },
  mainView2: {
    width: width_screen * 0.85,
    marginTop: height_screen * 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainView: {
    width: width_screen * 0.85,
    alignSelf: "center",
    marginTop: height_screen * 0.07,
    flexDirection: "row",
  },
  pickerStyle: {
    width: "100%",
    fontSize: 10,
    color: "#000",
    height: 45,
  },
  logoStyle: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    resizeMode: "contain",
  },
  idcardStyles: {
    height: height_screen * 0.15,
    width: width_screen * 0.4,
    resizeMode: "contain",
  },
});
