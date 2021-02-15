import React, { memo, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Alert, StatusBar } from "react-native";
import AuthNavigator from "./StackNavigator/AuthNavigator";

function Main() {
  const [isAuthenticated, setAutenticated] = useState(false);

  //   const dispatch = useDispatch();
  //   //   const { is_authenticated } = useSelector<any, any>((state) => state.auth);

  //   //   useEffect(() => {
  //   //     is_authenticated ? getUserPosition() : dispatch(getUserSessions());
  //   //   }, [dispatch, is_authenticated]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      {/* {GetItem_AsynsStorage("Token").then((res) => //console.log("ASYNC", res))} */}
      {/* {is_authenticated ? <PrivateNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default Main;

// const Main = memo(() => {
//   //   const [isAuthenticated, setAutenticated] = useState(false);

//   const dispatch = useDispatch();
//   //   const { is_authenticated } = useSelector<any, any>((state) => state.auth);

//   //   useEffect(() => {
//   //     is_authenticated ? getUserPosition() : dispatch(getUserSessions());
//   //   }, [dispatch, is_authenticated]);

//   return (
//     <NavigationContainer>
//       <StatusBar
//         barStyle={"light-content"}
//         translucent={true}
//         backgroundColor={"transparent"}
//       />
//       {/* {GetItem_AsynsStorage("Token").then((res) => //console.log("ASYNC", res))} */}
//       {/* {is_authenticated ? <PrivateNavigator /> : <AuthNavigator />} */}
//     </NavigationContainer>
//   );
// });

// export default Main;
