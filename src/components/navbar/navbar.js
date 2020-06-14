import React, { Component } from "react";
import { connect } from "react-redux";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { cancelSearch } from "../../actions/search";
import { logout } from "../../actions/auth";

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static" style={{ display: "flex" }}>
        <Toolbar>
          <Typography variant="h6">React template</Typography>
          <div style={{ marginLeft: "auto" }}>
            {this.props.isAuthUser ? (
              <>
                <Link to="/home">
                  <Button
                    color="inherit"
                    // onClick={() => this.props.cancelSearch()}
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/documents">
                  <Button
                    color="inherit"
                    // onClick={() => this.props.cancelSearch()}
                  >
                    Documents
                  </Button>
                </Link>
                <Link to="/search">
                  <Button
                    color="inherit"
                    // onClick={() => this.props.cancelSearch()}
                  >
                    Search
                  </Button>
                </Link>
                <Button color="inherit" onClick={this.props.logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
export default connect(({ loginStore: { isAuthUser } }) => ({ isAuthUser }), {
  cancelSearch,
  logout,
})(NavBar);
