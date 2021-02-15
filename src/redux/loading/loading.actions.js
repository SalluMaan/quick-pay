import {
  START_AUTH_LOADING,
  START_LOADING,
  STOP_AUTH_LOADING,
  STOP_LOADING,
} from "../actionTypes";

export const startLoading = () => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
};

export const stopLoading = () => (dispatch) => {
  dispatch({
    type: STOP_LOADING,
  });
};

export const startAuthLoading = () => (dispatch) => {
  dispatch({
    type: START_AUTH_LOADING,
  });
};

export const stopAuthLoading = () => (dispatch) => {
  dispatch({
    type: STOP_AUTH_LOADING,
  });
};
