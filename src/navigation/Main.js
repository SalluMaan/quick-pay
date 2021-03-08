import React, { memo, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Alert, StatusBar } from "react-native";
import DrawerNavigator from "./DrawerNavigator/DrawerNavigator";
import { getUserSessions } from "../redux/auth/auth.actions";
import PrivateNavigator from "./StackNavigator/PrivateNavigator";
import AuthNavigator from "./StackNavigator/AuthNavigator";

function Main() {
  const [isAuthenticated, setAutenticated] = useState(false);

  const dispatch = useDispatch();
  const { is_authenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!is_authenticated) {
      dispatch(getUserSessions());
    }
    console.log("is_authenticated,", is_authenticated);
  }, [dispatch, is_authenticated]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      {console.log("is_authenticated,", is_authenticated)}
      {is_authenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default Main;
