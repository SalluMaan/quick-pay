import {
  LANGUAGE_ENGLISH,
  LANGUAGE_SPANISH,
  START_AUTH_LOADING,
  START_LOADING,
  STOP_AUTH_LOADING,
  STOP_LOADING,
} from "../actionTypes";

export const setLanguageEnglish = () => (dispatch) => {
  console.log("setLanguageEnglish");

  dispatch({
    type: LANGUAGE_ENGLISH,
  });
};

export const setLanguageSpanish = () => (dispatch) => {
  console.log("setLanguageSpanish");
  dispatch({
    type: LANGUAGE_SPANISH,
  });
};
