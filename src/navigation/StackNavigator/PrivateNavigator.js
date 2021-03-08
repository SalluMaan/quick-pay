import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../utils/routes/index";
import headerBackground from "../../components/header/headerbackground";
import Login from "../../screens/Auth/Login";
import ForgotPassword from "../../screens/Auth/ForgotPassword";
import ChangePassword from "../../screens/Auth/ChangePassword";
import Deposit from "../../screens/Deposit/Deposit";
import Notify from "../../screens/Notify/Notify";
import Profile from "../../screens/Profile/Profile";
import EditProfile from "../../screens/Profile/EditProfile";
import SendMoney from "../../screens/SendMoney/SendMoney";
import CheckMail from "../../screens/Auth/CheckMail";
import Register from "../../screens/Auth/Register";
import BankDeposit from "../../screens/Deposit/BankDeposit";
import Transaction from "../../screens/Transaction/Transaction";
import DepositMethod from "../../screens/Deposit/DepositMethod";
import AutheticateAccount from "../../screens/Auth/AutheticateAccount";
import Kyc_ID from "../../screens/KYC/Kyc_ID";
import Kyc_Profile from "../../screens/KYC/Kyc_Profile";
import Invoice from "../../screens/Invoice/Invoice";
import Splash from "../../screens/Splash/Splash";
import ScanAndPay from "../../screens/ScanAndPay/ScanAndPay";
import Home from "../../screens/Home/Home";
import Exchange from "../../screens/Exchange/Exchange";
import Withdraw from "../../screens/Withdraw/Withdraw";
import BankDeposit2 from "../../screens/Deposit/BankDeposit2";
import WithdrawBank from "../../screens/TabScreen/TabWithdraw/WithdrawBank";
import WithdrawCrypto from "../../screens/TabScreen/TabWithdraw/WithdrawCrypto";
import WithdrawbankTwo from "../../screens/TabScreen/TabWithdraw/WithdrawbankTwo";
import WithdrawPaypal from "../../screens/TabScreen/TabWithdraw/WithdrawPaypal";

const authStack = createStackNavigator();

const PrivateNavigator = () => (
  <authStack.Navigator headerMode="none">
    {/* <authStack.Screen name={ROUTES.Login} component={Login} />
    <authStack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} />
    <authStack.Screen name={ROUTES.ChangePassword} component={ChangePassword} /> */}
    <authStack.Screen name={ROUTES.Home} component={Home} />
    <authStack.Screen name={ROUTES.ChangePassword} component={ChangePassword} />

    <authStack.Screen name={ROUTES.Deposit} component={Deposit} />
    <authStack.Screen name={ROUTES.Notify} component={Notify} />
    <authStack.Screen name={ROUTES.Profile} component={Profile} />
    <authStack.Screen name={ROUTES.EditProfile} component={EditProfile} />
    <authStack.Screen name={ROUTES.SendMoney} component={SendMoney} />
    <authStack.Screen name={ROUTES.CheckMail} component={CheckMail} />
    {/* <authStack.Screen name={ROUTES.Register} component={Register} /> */}
    <authStack.Screen name={ROUTES.BankDeposit} component={BankDeposit} />
    <authStack.Screen name={ROUTES.BankDeposit2} component={BankDeposit2} />
    <authStack.Screen name={ROUTES.Transaction} component={Transaction} />
    <authStack.Screen name={ROUTES.DepositMethod} component={DepositMethod} />
    <authStack.Screen
      name={ROUTES.AutheticateAccount}
      component={AutheticateAccount}
    />

    <authStack.Screen name={ROUTES.Kyc_ID} component={Kyc_ID} />
    <authStack.Screen name={ROUTES.Kyc_Profile} component={Kyc_Profile} />
    <authStack.Screen name={ROUTES.Invoice} component={Invoice} />
    <authStack.Screen name={ROUTES.Splash} component={Splash} />
    <authStack.Screen name={ROUTES.ScanAndPay} component={ScanAndPay} />
    <authStack.Screen name={ROUTES.Exchange} component={Exchange} />
    <authStack.Screen name={ROUTES.Withdraw} component={Withdraw} />
    <authStack.Screen
      name={ROUTES.WithdrawLocalBank}
      component={WithdrawBank}
    />
    <authStack.Screen name={ROUTES.WithdrawCrypto} component={WithdrawCrypto} />
    <authStack.Screen
      name={ROUTES.WithdrawInternationalBank}
      component={WithdrawbankTwo}
    />
    <authStack.Screen name={ROUTES.WithdrawPaypal} component={WithdrawPaypal} />

    {/* <authStack.Screen name={ROUTES.Register} component={Register} />
    <authStack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} /> */}
    {/* <authStack.Screen name={ROUTES.ChangePassword} component={ChangePassword} /> */}
    {/* <authStack.Screen name={ROUTES.Profile} component={Profile} /> */}
  </authStack.Navigator>
);
export default PrivateNavigator;
