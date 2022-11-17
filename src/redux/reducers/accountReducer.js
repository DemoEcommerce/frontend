import { GLOBALTYPES } from "../actions/globalTypes";
const initialState = {};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.ACCOUNT:
      return { ...state, listAccount: action.payload };
    default:
      return state;
  }
};

export default accountReducer;
