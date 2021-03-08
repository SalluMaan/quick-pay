import { alertMessage } from "../../utils/common/alertToastMessages";
import axios from "../../utils/services/httpServices";

export const withDrawMethods = (data) => {
  axios.post("/api/customer-withdrawals/submit", data).then((res) => {
    if (res.status === 200) {
      console.log("Response withdrawByLocalBank", res.data);
    }
  });
};
