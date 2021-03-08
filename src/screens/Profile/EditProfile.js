import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../components/buttons/MainButton";
import HeaderSimple from "../../components/header/HeaderSimple";
import TextHead from "../../components/TextLabel/TextHead";
import TextParagraph from "../../components/TextLabel/TextParagraph";
import Text_Input from "../../components/Text_Input/Text_Input";
import { getProfile, updateProfile } from "../../redux/user/user.actions";
import Color from "../../utils/color";
import { height_screen, width_screen } from "../../utils/dimensions";
import FONTS from "../../utils/fonts";
import { NOT_FOUND } from "../../utils/URL";
import AccountCard from "./_Part/AccountCard";

export default EditProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.user);
  const [name, setname] = useState(user?.name);
  const [email, setemail] = useState(user?.email);

  const [country, setcountry] = useState(user?.country);
  const [contact, setcontact] = useState(user?.contact);
  const [address, setaddress] = useState(user?.address);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const onClickListener = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", user?.email);
    formData.append("contact", contact);
    formData.append("country", country);
    formData.append("address", address);

    console.log("Update", formData);
    dispatch(updateProfile(formData));
  };
  return (
    <>
      <HeaderSimple heading="Settings" />
      {console.log({ user })}
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, marginBottom: height_screen * 0.1 }}
          showsVerticalScrollIndicator={false}
        >
          <StatusBar style="dark" />
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: NOT_FOUND }} />
            <View>
              <Text style={styles.nameText}>Edit Profile</Text>
              <TouchableOpacity>
                <Text style={styles.nameText2}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text_Input
            secureText={false}
            placeholder="Haider Ali"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setname(data)}
            placeholderColor="#a4a4a4"
            label="User Name"
            value={name}
          />
          <Text_Input
            secureText={false}
            placeholder="user@gmail.com"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="E-mail"
            value={email}
            disable={false}
          />
          <Text_Input
            secureText={false}
            placeholder="+97612536231"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setcontact(data)}
            placeholderColor="#a4a4a4"
            label="Phone"
            value={contact}
          />
          <Text_Input
            secureText={false}
            placeholder="Male"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Gender"
            // value={user?.name}
          />
          <Text_Input
            secureText={false}
            placeholder="09/09/2121"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Date of Birth"
            // value={user?.name}
          />
          <Text_Input
            secureText={false}
            placeholder="Street abc # Lahore"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => set(data)}
            placeholderColor="#a4a4a4"
            label="Location"
            value={address}
          />

          <Text_Input
            secureText={false}
            placeholder="Lahore"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setcountry(data)}
            placeholderColor="#a4a4a4"
            label="Country"
            value={country}
          />
          {/* 
          <Text_Input
            secureText={true}
            placeholder="*****"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Password"
            width={width_screen * 0.75}
          /> */}

          {/* <Text_Input
            secureText={true}
            placeholder="*****"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Password"
          />

          <Text_Input
            secureText={true}
            placeholder="*****"
            style={[styles.textInput, { backgroundColor: "red" }]}
            setdata={(data) => setemail(data)}
            placeholderColor="#a4a4a4"
            label="Password"
          /> */}

          <View
            style={{ alignSelf: "center", marginTop: height_screen * 0.03 }}
          >
            <MainButton
              text="Edit Profile"
              widthBtn={width_screen * 0.5}
              onPress={onClickListener}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height_screen,
    width: width_screen,
    backgroundColor: Color.PAGE_BG_COLOR,
    paddingHorizontal: height_screen * 0.05,
  },
  forgotText: { color: "#a4a4a4", marginVertical: height_screen * 0.04 },
  img: {
    height: height_screen * 0.15,
    width: width_screen * 0.3,
    borderRadius: 100,
    borderWidth: 0.3,
    borderColor: "#a4a4a4",
  },
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: height_screen * 0.03,
  },
  nameText: {
    marginLeft: width_screen * 0.05,
    fontSize: height_screen * 0.02,
    fontFamily: FONTS.Regular,
  },
  nameText2: {
    marginLeft: width_screen * 0.05,
    fontSize: height_screen * 0.02,
    color: Color.LINEAR_CLR_1,
    textDecorationLine: "underline",
    fontFamily: FONTS.Regular,
  },
});
