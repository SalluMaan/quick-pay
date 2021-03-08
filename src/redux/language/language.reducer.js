import { LANGUAGE_ENGLISH, LANGUAGE_SPANISH } from "../actionTypes";

const initialState = {
  language: "eng",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LANGUAGE_ENGLISH:
      return { language: "eng" };
    case LANGUAGE_SPANISH:
      return { language: "sp" };
    default:
      return state;
  }
}
