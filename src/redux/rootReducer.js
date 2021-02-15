import { combineReducers } from "redux";
// import authReducer from "./auth/auth.Reducer";
import loadingReducer from "./loading/loading.reducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  // users: usersReducer,
});

export default rootReducer;
