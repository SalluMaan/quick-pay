import ROUTES from "../../utils/routes";
import axios from "../../utils/services/httpServices";
import {
  GET_LOCATION_INFO,
  GET_SINGLE_USER,
  IS_AUTHENTICATED,
  NOT_AUTHORIZED,
} from "../actionTypes";
import { startAuthLoading, stopAuthLoading } from "../loading/loading.actions";
import * as profileAxios from "axios";

// import * as profileAxios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { alertMessage } from "../../utils/common/alertToastMessages";
import { getProfile } from "../user/user.actions";
// import {
//   IS_AUTHENTICATED,
//   NOT_AUTHORIZED,
//   UPDATE_AUTH_USER,
// } from "../actionTypes";
// import { addUser, getSingleUser, updateUser } from "redux/users/users.actions";
// import {
//   startAuthLoading,
//   startLoading,
//   stopAuthLoading,
//   stopLoading,
// } from "redux/loading/loading.actions";
// import { alertMessage } from "ultis/alertToastMessages";
// import { registerForAsyncPushToken } from "redux/notifications/notifications.actions";
// import isEmpty from "ultis/isEmpty";

export const login = (data, navigate) => (dispatch) => {
  console.log({ data });
  axios.post("api/login", data).then((res) => {
    if (res.status === 200) {
      getProfile(res.data.data.accessToken);
      console.log("Response", res.data.data);
      // navigate(ROUTES.Home);
      setUserSessions(res.data.data);
      dispatch(isAuthenticated(res.data.data));
      dispatch(getProfile());
    }
  });
};

export const register = (data, navigate) => {
  axios.post("api/register", data).then((res) => {
    if (res.status === 201) {
      // dispatch(getProfile(res.data.data.token));
      console.log("Response register register", res.data);
      navigate(ROUTES.Login);
    }
  });
};

export const getLocation = (data) => (dispatch) => {
  // console.log("getLocation", data);
  axios.get("/api/geolocation?address=" + data).then((res) => {
    if (res.status === 200) {
      // console.log("Response getLocation getLocation", res.data);
      dispatch({
        type: GET_LOCATION_INFO,
        payload: res.data,
      });
    }
  });
};

// export const getProfile = () => (dispatch) => {
//   console.log("getProfile");
//   axios.get("/api/user").then((res) => {
//     if (res.status === 200) {
//       console.log("Response getProfile getProfile", res.data);
//       dispatch({
//         type: GET_SINGLE_USER,
//         payload: res.data,
//       });
//     }
//   });
// };

export const forgotPassword = (data, navigate) => {
  return axios.post("api/forget-password", data).then((res) => {
    if (res.status === 200 && res.data.success) {
      console.log("Response forgotPassword forgotPassword", res.data);
      alertMessage(res.data.message);
      navigate(ROUTES.CheckMail);
    } else {
      alertMessage(res.data.message);
    }
  });
};

export const changePassword = (data, navigate) => {
  return axios.post("api/settings/security", data).then((res) => {
    if (res.status === 200 && res.data.success) {
      console.log("Response changePasswordchangePassword", res.data);
      alertMessage(res.data.message);
      navigate.goBack();
    } else {
      alertMessage(res.data.message);
    }
  });
};

// export const updateProfile = (data) => (dispatch) => {
//   axios.post("auth/update-profile", data).then((res) => {
//     if (res.status === 200) {
//       alertMessage("Your Profile has been Updated Successfully!");
//       dispatch(getProfile());
//     }
//   });
// };

// export const getProfile = (auth_token) => (dispatch) => {
//   console.log({ auth_token });
//   profileAxios
//     .get("/api/user", {
//       headers: { Authorization: `Bearer ${auth_token}` },
//     })
//     .then((res) => {
//       if (res.status === 200) {
//         console.log("profile response is ", res.data);
//         dispatch(getProfile(res.data));
//       }
//     })
//     .catch((err) => {
//       console.log({ err });
//     });
// };

export const logout = () => (dispatch) => {
  AsyncStorage.clear();
  dispatch(unAuthorized());
};

////set token in async storage////
export const setUserSessions = (data) => {
  try {
    AsyncStorage.setItem("Token", data.accessToken);
    AsyncStorage.setItem("user", JSON.stringify(data));
    // console.log(
    //   "setUserSessions/setUserSessions",
    //   data.accessToken,
    //   data.toString()
    // );
  } catch (e) {
    // saving error
    console.log("Error While Adding Data to AsyncStorage", e);
  }
};

//// get token from async storage///
export const getUserSessions = () => async (dispatch) => {
  console.log("Runing getUserSessions");
  dispatch(startAuthLoading());
  try {
    const token = await AsyncStorage.getItem("Token");
    const userId = await AsyncStorage.getItem("user");
    const data = JSON.parse(userId);
    dispatch(stopAuthLoading());
    if (token) {
      dispatch(isAuthenticated(data));
    }
    // token ? dispatch(IS_AUTHENTICATED({ auth_token: token })) : null;
    // console.log("Token", token, userId);
  } catch (error) {
    console.error("error is ", error);
    dispatch(stopAuthLoading());
  }
};

export const isAuthenticated = (data) => (dispatch) => {
  // console.log({ data });
  dispatch({
    type: IS_AUTHENTICATED,
    payload: data,
  });
};

export const unAuthorized = () => async (dispatch) => {
  await dispatch({
    type: NOT_AUTHORIZED,
  });
  dispatch(stopAuthLoading());
};
