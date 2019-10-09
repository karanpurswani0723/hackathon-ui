import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Layout } from "antd";

class BasicProfile extends Component {
  state = {};

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            value={values.firstName}
            disabled={values.firstName === "" ? false : true}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            value={values.lastName}
            disabled={values.lastName === "" ? false : true}
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            value={values.email}
            disabled={values.lastName === "" ? false : true}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 2
  }
};
export default BasicProfile;
