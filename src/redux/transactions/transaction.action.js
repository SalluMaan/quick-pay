import ROUTES from "../../utils/routes";
import axios from "../../utils/services/httpServices";
import {
  GET_ALL_TRANSACTIONS,
  GET_LOCATION_INFO,
  IS_AUTHENTICATED,
  NOT_AUTHORIZED,
} from "../actionTypes";

export const getAllTransactions = () => (dispatch) => {
  axios
    .get("api/transactions")
    .then((res) => {
      if (res.status === 200) {
        console.log("RESPONSE getAllTransactions getAllTransactions", res.data);
        dispatch({
          type: GET_ALL_TRANSACTIONS,
          payload: res.data.data.transactions,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });
};
