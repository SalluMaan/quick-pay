import ROUTES from "../../utils/routes";
import axios from "../../utils/services/httpServices";
import {
  GET_ACCOUNT_TYPES,
  GET_COUNTRIES,
  GET_LOCATION_INFO,
  GET_SINGLE_USER,
  IS_AUTHENTICATED,
  NOT_AUTHORIZED,
  GET_BANKS,
} from "../actionTypes";
import { startAuthLoading, stopAuthLoading } from "../loading/loading.actions";
import * as profileAxios from "axios";

// import * as profileAxios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { alertMessage } from "../../utils/common/alertToastMessages";

export const getProfile = () => (dispatch) => {
  axios.get("/api/user").then((res) => {
    if (res.status === 200) {
      // console.log("Response getProfile getProfile", res.data);
      dispatch({
        type: GET_SINGLE_USER,
        payload: res.data,
      });
    }
  });
};

export const getAccountTypes = () => (dispatch) => {
  axios.get("/api/get-account-types").then((res) => {
    if (res.status === 200) {
      // console.log("Response getProfile getProfile", res.data);
      const data = res.data.data.account_types;
      // console.log("Response getAccountTypes", data);
      dispatch({
        type: GET_ACCOUNT_TYPES,
        payload: data,
      });
    }
  });
};

export const getCountries = () => (dispatch) => {
  axios.get("/api/get-countries").then((res) => {
    if (res.status === 200) {
      const data = res.data.data.countries;
      // console.log("Response getCountries", data);
      dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    }
  });
};

export const getBanksByCountryName = (Req) => (dispatch) => {
  axios.post("/api/get-banks", Req).then((res) => {
    if (res.status === 200) {
      const data = res.data.data.banks;
      console.log("Response getBanksByCountryName", data, res.data);
      dispatch({
        type: GET_BANKS,
        payload: data,
      });
    }
  });
};

export const updateProfile = (data) => (dispatch) => {
  axios.post("/api/settings/profile", data).then((res) => {
    if (res.status === 200) {
      alertMessage("Your Profile has been Updated Successfully!");
      dispatch(getProfile());
    }
  });
};
