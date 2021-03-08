import { combineReducers } from "redux";
// import authReducer from "./auth/auth.Reducer";
import loadingReducer from "./loading/loading.reducer";
import languageReducer from "./language/language.reducer";
import authReducer from "./auth/auth.Reducer";
import depositReducer from "./deposit/deposit.reducer";
import transactionReducer from "./transactions/transaction.reducer";
import userReducer from "./user/user.reducer";
import kycReducer from "./kyc/kyc.reducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  language: languageReducer,
  auth: authReducer,
  deposit: depositReducer,
  transaction: transactionReducer,
  transaction: transactionReducer,
  user: userReducer,
  kyc: kycReducer,
});

export default rootReducer;
