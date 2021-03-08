import axios from "axios";
import { startLoading, stopLoading } from "../../redux/loading/loading.actions";
// import { clearErrors, errorActions } from "redux/error/error.actions";
// import { alertMessage, toastMessages } from "ultis/alertToastMessages";
// import { startLoading, stopLoading } from "../../redux/loading/loading.actions";
import store from "../../redux/store";
import { alertMessage, toastMessages } from "../common/alertToastMessages";

axios.defaults.baseURL = "https://user.quikipay.com/";

const { dispatch, getState } = store;

axios.interceptors.request.use(
  (request) => {
    dispatch(startLoading());
    // dispatch(clearErrors());

    const requestUrl = request?.url.split("/")[0];
    const isAuthUrl = [
      "api/login",
      "api/geolocation?address=",
      "api/deposits/methods?country=",
      "api/user",
      // "api/store-kyc",
      // "forget-password",
      // "password-reset",
    ].includes(requestUrl);

    if (!isAuthUrl) {
      const { login_Session } = getState()?.auth;
      request.headers.common[
        "Authorization"
      ] = `Bearer ${login_Session?.accessToken}`;
      // console.log("GET USER SESSIONS", login_Session);
    }
    return request;
  },
  (error) => {
    dispatch(stopLoading());
    console.log("request error is", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    dispatch(stopLoading());
    // console.log("REsponse", response);
    return response;
  },
  (error) => {
    dispatch(stopLoading());
    const { status, data } = error?.response;
    // console.log("error response is ", error);
    //status code (404:Not found, 500 server, 401 token expire)
    if (status === 401) {
      // toastMessages("Unexpected error!");
      console.log("Message", data);
    }
    if (status === 404) {
      // toastMessages("Unexpected error!");
      console.log("Message", data);
    }

    if (status === 422) {
      // toastMessages("Unexpected error!");
      console.log("Message", data);
      const resData = data.errors;
      alertMessage(resData[Object.keys(resData)[0]].toString());
    }
    if (status === 500) {
      toastMessages("Unexpected error!");
    } else {
      // dispatch(errorActions({ status, data }));
      // toastMessages("UnAuthorized error!");
      console.log("Error", data);
    }
    return Promise.reject(error);
  }
);

export default {
  post: axios.post,
  put: axios.put,
  get: axios.get,
  delete: axios.delete,
};
