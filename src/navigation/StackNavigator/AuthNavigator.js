import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../utils/routes/index";
import headerBackground from "../../components/header/headerbackground";
import Login from "../../screens/Auth/Login";
import ForgotPassword from "../../screens/Auth/ForgotPassword";
import ChangePassword from "../../screens/Auth/ChangePassword";
import Deposit from "../../screens/Deposit/Deposit";
import Notify from "../../screens/Notify/Notify";

const authStack = createStackNavigator();

const AuthNavigator = () => (
  <authStack.Navigator headerMode="none">
    <authStack.Screen name={ROUTES.Login} component={Login} />
    <authStack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} />
    <authStack.Screen name={ROUTES.ChangePassword} component={ChangePassword} />
    <authStack.Screen name={ROUTES.Deposit} component={Deposit} />
    <authStack.Screen name={ROUTES.Notify} component={Notify} />

    {/* <authStack.Screen name={ROUTES.Register} component={Register} />
    <authStack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} /> */}
    {/* <authStack.Screen name={ROUTES.ChangePassword} component={ChangePassword} /> */}
    {/* <authStack.Screen name={ROUTES.Profile} component={Profile} /> */}
  </authStack.Navigator>
);
export default AuthNavigator;
