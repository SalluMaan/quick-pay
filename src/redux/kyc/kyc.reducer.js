import { GET_ALL_TRANSACTIONS, GET_USER_KYC } from "../actionTypes";

const initialState = {
  kyc: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_KYC:
      // console.log("GET_USER_KYC", action.payload);
      return {
        kyc: action.payload,
      };
    default:
      return state;
  }
}
