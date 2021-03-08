import { GET_ALL_TRANSACTIONS } from "../actionTypes";

const initialState = {
  transactions: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return {
        transactions: action.payload,
      };
    default:
      return state;
  }
}
