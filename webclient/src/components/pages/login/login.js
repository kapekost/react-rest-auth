import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Typography, Button } from "@material-ui/core";
import { login, formError } from "../../../actions/login";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default () => {
  const state = useSelector((state) => state.loginStore);
  const dispatch = useDispatch();
  const isAuthUser = state.isAuthUser;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      dispatch(formError("Fields are required"));
      return;
    }
    dispatch(login({ email, password }));
  };

  return (
    <form>
      <Typography variant="h5" style={{ marginBottom: 8 }}>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="form-input"
        size="large"
        onClick={submitForm}
      >
        Login
      </Button>
      {state.error ? (
        <Alert severity="error" onClick={() => dispatch(formError(null))}>
          {state.error}
        </Alert>
      ) : (
        ""
      )}
    </form>
  );
};
