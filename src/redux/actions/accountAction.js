import { GLOBALTYPES } from "./globalTypes";
import { getDataAPI } from "../../utils/fetchData";

export const getAllAccount = () => async (dispatch) => {
  try {
    const res = await getDataAPI("get_all_account");
    dispatch({
      type: GLOBALTYPES.ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};
