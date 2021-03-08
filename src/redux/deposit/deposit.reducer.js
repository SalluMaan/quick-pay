import { GET_DEPOSIT_METHODS } from "../actionTypes";

const initialState = {
  methods: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEPOSIT_METHODS:
      return {
        methods: action.payload,
      };
    default:
      return state;
  }
}
