import { API_SUCCESS, API_ERROR } from "../../../actions/api";

export default (
  state = {
    documentsList: [],
  },
  action
) => {
  switch (action.type) {
    case API_SUCCESS:
      return { ...state, documentsList: action.payload };
    case API_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
