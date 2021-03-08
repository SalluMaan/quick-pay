import {
  GET_ACCOUNT_TYPES,
  GET_ALL_TRANSACTIONS,
  GET_COUNTRIES,
  GET_SINGLE_USER,
  GET_BANKS,
} from "../actionTypes";

const initialState = {
  user: null,
  account_types: null,
  countries: null,
  banks: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return {
        user: action.payload,
      };
    case GET_ACCOUNT_TYPES:
      return {
        ...state,
        account_types: action.payload,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_BANKS:
      return {
        ...state,
        banks: action.payload,
      };

    default:
      return state;
  }
}
