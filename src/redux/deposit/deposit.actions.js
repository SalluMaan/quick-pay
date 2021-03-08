import ROUTES from "../../utils/routes";
import axios from "../../utils/services/httpServices";
import {
  GET_DEPOSIT_METHODS,
  GET_LOCATION_INFO,
  IS_AUTHENTICATED,
  NOT_AUTHORIZED,
} from "../actionTypes";

export const getDepositMethod = (data) => (dispatch) => {
  axios
    .get("api/deposits/methods?country=" + data)
    .then((res) => {
      if (res.status === 200) {
        console.log("RESPONSE getDepositMethod getDepositMethod", res.data);
        dispatch({
          type: GET_DEPOSIT_METHODS,
          payload: res.data.methods,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const PayWithBacs = (data, callBack) => {
  axios
    .post("api/deposits/bacs", data)
    .then((res) => {
      const data = res.data;
      callBack(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
