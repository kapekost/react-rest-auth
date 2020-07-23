export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const FORM_ERROR = "FORM_ERROR";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const formError = (message) => {
  return {
    type: FORM_ERROR,
    error: message,
  };
};
