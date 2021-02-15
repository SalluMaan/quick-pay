import axios from "axios";
import { clearErrors, errorActions } from "redux/error/error.actions";
import { alertMessage, toastMessages } from "ultis/alertToastMessages";
import { startLoading, stopLoading } from "../../redux/loading/loading.actions";
import store from "../../redux/store";

axios.defaults.baseURL = "http://iuvo.arcocia.tech/api/";

const { dispatch, getState } = store;

axios.interceptors.request.use(
  (request) => {
    dispatch(startLoading());
    dispatch(clearErrors());

    const requestUrl = request?.url.split("/")[0];
    const isAuthUrl = [
      "login",
      "register",
      "forget-password",
      "password-reset",
    ].includes(requestUrl);

    if (!isAuthUrl) {
      const { login_Session } = getState()?.auth;

      request.headers.common[
        "Authorization"
      ] = `Bearer ${login_Session?.auth_token}`;
    }
    return request;
  },
  (error) => {
    dispatch(stopLoading());
    //console.log("request error is", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    dispatch(stopLoading());
    return response;
  },
  (error) => {
    dispatch(stopLoading());
    const { status, data } = error?.response;
    //console.log("error response is ", error?.response.status);
    //status code (404:Not found, 500 server, 401 token expire)
    if (status === 500) {
      toastMessages("Unexpected error!");
    } else {
      dispatch(errorActions({ status, data }));
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
