import React, { Component } from "react";
import BasicProfile from "./BasicProfile";
import IdentityInformation from "./IdentityInformation";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  componentDidMount() {
    const userForm = this;
    fetch("/.auth/me")
      .then(res => res.json())
      .then(
        result => {
          result[0].user_claims.forEach(function(claimItem) {
            if (claimItem.typ.endsWith("emailaddress")) {
              userForm.setState({ email: claimItem.val });
            }
            if (claimItem.typ.endsWith("givenname")) {
              userForm.setState({ firstName: claimItem.val });
            }
            if (claimItem.typ.endsWith("surname")) {
              userForm.setState({ lastName: claimItem.val });
            }
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          alert("error2 " + error);
        }
      );
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, mobileNumber } = this.state;
    const basicProfileFields = { firstName, lastName, email };
    const identityFields = { mobileNumber };
    switch (step) {
      case 1:
        return (
          <BasicProfile
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={basicProfileFields}
          />
        );
      case 2:
        return (
          <IdentityInformation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={identityFields}
          />
        );
      case 3:
        return <h1>Page 2</h1>;
      default:
        return <h1>Page 4</h1>;
    }
  }
}

export default UserForm;
