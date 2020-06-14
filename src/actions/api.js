// action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";

export const API_ERROR = "API_ERROR";

export const CANCEL_API_REQUEST = "CANCEL_API_REQUEST";

// action creators
export const apiRequest = ({ url, method }) => {
  return {
    type: API_REQUEST,
    meta: { url, method },
  };
};

export const loginRequest = ({ url, method, data }) => {
  return {
    type: LOGIN_REQUEST,
    meta: { url, method, data },
  };
};

export const apiSuccess = ({ response, type }) => {
  let restype = API_SUCCESS;
  switch (type) {
    case LOGIN_REQUEST:
      restype = LOGIN_SUCCESS;
      break;
    case API_REQUEST:
      restype = API_SUCCESS;
      break;
    default:
      restype = API_SUCCESS;
  }
  return {
    type: restype,
    payload: response,
  };
};

export const cancelApiRequest = () => {
  return {
    type: CANCEL_API_REQUEST,
  };
};
export const apiError = ({ error }) => ({
  type: API_ERROR,
  payload: error,
});
