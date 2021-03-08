import {
  GET_LOCATION_INFO,
  GET_SINGLE_USER,
  IS_AUTHENTICATED,
  NOT_AUTHORIZED,
  UPDATE_AUTH_USER,
} from "../actionTypes";

const initialState = {
  is_authenticated: false,
  login_Session: null,

  // login_User: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        is_authenticated: true,
        login_Session: action.payload,
      };
    case NOT_AUTHORIZED:
      return {
        is_authenticated: false,
        login_Session: null,
      };
    case GET_LOCATION_INFO:
      // console.log("REDUCER", state);
      const data = { ...state.login_Session, ...action.payload };
      // console.log("REDUCER DATA DATA ADTA A", data);

      return {
        login_Session: data,
        is_authenticated: true,
      };

    // case GET_SINGLE_USER:
    //   return {
    //     login_User: action.payload,
    //     is_authenticated: true,
    //   };

    default:
      return state;
  }
}
