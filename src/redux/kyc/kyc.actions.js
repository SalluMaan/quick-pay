import ROUTES from "../../utils/routes";
import axios from "../../utils/services/httpServices";
import {
  GET_DEPOSIT_METHODS,
  GET_LOCATION_INFO,
  GET_USER_KYC,
  IS_AUTHENTICATED,
  NOT_AUTHORIZED,
} from "../actionTypes";

export const getUserKyc = () => (dispatch) => {
  axios
    .get("api/kyc")
    .then((res) => {
      if (res.status === 200) {
        const data = res.data.data.User_kyc;
        console.log("Response GetUserKyc", data);

        dispatch({
          type: GET_USER_KYC,
          payload: data,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const addKycProfile = (data) => {
  console.log("form data Response in addKycProfile", data);
  axios
    .post("api/store-kyc", data)
    .then((res) => {
      if (res.status === 200) {
        console.log("addKycProfile", res.data);
        //   alertMessage("Your Profile has been Updated Successfully!");
        // dispatch(getProfile());
      }
    })
    .catch((err) => {
      console.log("Error in addKycProfile", err);
    });
};
